import { NextResponse } from "next/server";

import { getLocalChatReply } from "@/lib/ai/local-responder";
import { CHAT_SYSTEM_PROMPT } from "@/lib/ai/system-prompt";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

type GeminiContent = {
  role: "user" | "model";
  parts: { text: string }[];
};

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

function readGeminiApiKey(): string | undefined {
  const raw = process.env.GEMINI_API_KEY?.trim() || process.env.GOOGLE_API_KEY?.trim();
  if (!raw) return undefined;

  const unquoted = raw.replace(/^['"]|['"]$/g, "").trim();
  return unquoted || undefined;
}

function getLastUserMessage(messages: ChatMessage[]): string | null {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") {
      return messages[i].content;
    }
  }
  return null;
}

function toGeminiContents(messages: ChatMessage[]): GeminiContent[] {
  return messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));
}

async function getGeminiReply(messages: ChatMessage[], apiKey: string): Promise<string | null> {
  const model = process.env.GEMINI_MODEL?.trim() || "gemini-2.0-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: CHAT_SYSTEM_PROMPT }],
      },
      contents: toGeminiContents(messages),
      generationConfig: {
        temperature: 0.4,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[chat] Gemini error:", response.status, errorText);
    return null;
  }

  const data = (await response.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };

  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const reply = parts
    .map((part) => part.text?.trim())
    .filter(Boolean)
    .join("\n")
    .trim();

  return reply || null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestBody;
    const incoming = body.messages ?? [];

    if (!incoming.length) {
      return NextResponse.json(
        { error: "Δεν υπάρχουν μηνύματα προς αποστολή." },
        { status: 400 }
      );
    }

    const messages = incoming
      .filter(
        (message): message is ChatMessage =>
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0
      )
      .slice(-MAX_MESSAGES)
      .map((message) => ({
        role: message.role,
        content: message.content.trim().slice(0, MAX_MESSAGE_LENGTH),
      }));

    if (!messages.some((message) => message.role === "user")) {
      return NextResponse.json(
        { error: "Απαιτείται τουλάχιστον ένα μήνυμα χρήστη." },
        { status: 400 }
      );
    }

    const apiKey = readGeminiApiKey();
    let reply: string | null = null;

    if (apiKey) {
      reply = await getGeminiReply(messages, apiKey);
      if (!reply) {
        console.warn("[chat] Gemini failed — using local FAQ replies.");
      }
    } else {
      console.warn("[chat] GEMINI_API_KEY missing — using local FAQ replies.");
    }

    if (!reply) {
      const lastUserMessage = getLastUserMessage(messages);
      if (!lastUserMessage) {
        return NextResponse.json(
          { error: "Δεν βρέθηκε μήνυμα χρήστη." },
          { status: 400 }
        );
      }
      reply = getLocalChatReply(lastUserMessage);
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[chat] request failed:", err);
    return NextResponse.json(
      { error: "Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά." },
      { status: 500 }
    );
  }
}
