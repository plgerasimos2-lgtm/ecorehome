"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { CHAT_SUGGESTED_QUESTIONS } from "@/lib/ai/system-prompt";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const WELCOME_MESSAGE =
  "Γεια σας! Είμαι ο βοηθός της Eco ReHome. Ρωτήστε με για υπηρεσίες, διαδικασία προσφοράς ή επικοινωνία.";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    setInput("");

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      let data: { reply?: string; error?: string } = {};
      try {
        data = (await response.json()) as { reply?: string; error?: string };
      } catch {
        setError("Το chat δεν είναι διαθέσιμο ακόμα. Κάντε redeploy του site με τον νεότερο κώδικα.");
        return;
      }

      if (!response.ok) {
        setError(data.error ?? "Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.");
        return;
      }

      if (data.reply?.trim()) {
        setMessages((current) => [
          ...current,
          { role: "assistant", content: data.reply!.trim() },
        ]);
        return;
      }

      setError("Δεν λήφθηκε απάντηση. Δοκιμάστε ξανά ή καλέστε 6970652145.");
    } catch {
      setError("Αδυναμία σύνδεσης. Ελέγξτε το δίκτυο και δοκιμάστε ξανά.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="flex h-[min(32rem,calc(100vh-6rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl"
          role="dialog"
          aria-label="Συνομιλία με τον βοηθό Eco ReHome"
        >
          <div className="flex items-center justify-between border-b border-emerald-100 bg-emerald-600 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Eco ReHome Assistant</p>
              <p className="text-xs text-emerald-100">Απαντά σε ερωτήσεις πελατών</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition hover:bg-emerald-700"
              aria-label="Κλείσιμο συνομιλίας"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-emerald-50/40 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-emerald-600 text-white"
                      : "border border-emerald-100 bg-white text-zinc-700"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-zinc-500">
                  Γράφει απάντηση...
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {CHAT_SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(question)}
                    className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-left text-xs text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-emerald-100 bg-white p-3"
          >
            {error && <p className="mb-2 text-xs text-red-600">{error}</p>}
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Γράψτε την ερώτησή σας..."
                disabled={isLoading}
                className="flex-1 rounded-full border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Αποστολή μηνύματος"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M3.4 20.6 21 12 3.4 3.4l2.8 7.2L17 12l-10.8 1.4-2.8 7.2Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Κλείσιμο βοηθού" : "Άνοιγμα βοηθού"}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
          <path d="M8 10h.01M12 10h.01M16 10h.01M7 18l1.5-4.5A3 3 0 0 1 11.2 12h1.6a3 3 0 0 1 2.7 1.5L17 18" />
          <path d="M12 3a7 7 0 0 1 7 7v1.5" />
        </svg>
        {isOpen ? "Κλείσιμο" : "Ρωτήστε μας"}
      </button>
    </div>
  );
}
