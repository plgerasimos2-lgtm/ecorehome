"use client";

import { FormEvent, useState } from "react";

type Status = {
  type: "success" | "error";
  text: string;
} | null;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: string; error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          text: data.error ?? "Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: data.success ?? "Το μήνυμα στάλθηκε επιτυχώς.",
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        text: "Αδυναμία σύνδεσης με τον server. Δοκιμάστε ξανά.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="space-y-4 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-zinc-700">Όνομα</span>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="Το όνομά σας"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-zinc-700">Ηλεκτρονικό Ταχυδρομείο</span>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="example@email.gr"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-zinc-700">Τηλέφωνο</span>
        <input
          type="tel"
          name="phone"
          required
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="+30 69X XXX XXXX"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-zinc-700">Μήνυμα</span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="Περιγράψτε μας τις ανάγκες του χώρου σας"
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white transition duration-300 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Αποστολή..." : "Επικοινωνήστε Μαζί Μας"}
      </button>

      {status && (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-emerald-700" : "text-red-600"
          }`}
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
