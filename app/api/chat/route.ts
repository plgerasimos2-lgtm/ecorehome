import { NextResponse } from "next/server";

import { CHAT_SYSTEM_PROMPT } from "@/lib/ai/system-prompt";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Ο βοηθός AI δεν είναι ενεργός: λείπει το OPENAI_API_KEY. Προσθέστε το στο .env.local και κάντε επανεκκίνηση του server.",
        },
        { status: 500 }
      );
    }

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

    const model = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        messages: [{ role: "system", content: CHAT_SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[chat] OpenAI error:", response.status, errorText);
      return NextResponse.json(
        { error: "Παρουσιάστηκε πρόβλημα με τον βοηθό. Δοκιμάστε ξανά σε λίγο." },
        { status: 502 }
      );
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string | null } }[];
    };

    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "Δεν λήφθηκε απάντηση. Δοκιμάστε ξανά." },
        { status: 502 }
      );
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
