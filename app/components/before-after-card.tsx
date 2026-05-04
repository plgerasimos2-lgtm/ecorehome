"use client";

import { useId, useState } from "react";

type BeforeAfterCardProps = {
  title: string;
  beforeImage: string;
  afterImage: string;
};

export default function BeforeAfterCard({
  title,
  beforeImage,
  afterImage,
}: BeforeAfterCardProps) {
  const [position, setPosition] = useState(50);
  const sliderId = useId();

  return (
    <article className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-900">{title}</h3>

      <div className="relative overflow-hidden rounded-2xl border border-emerald-100">
        <div
          className="aspect-[16/10] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${afterImage})` }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(5,150,105,0.25)]"
          style={{ left: `calc(${position}% - 1px)` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full border border-white bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow"
          style={{ left: `calc(${position}% - 36px)` }}
          aria-hidden="true"
        >
          Σύρε
        </div>

        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white">
          Πριν
        </div>
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-700/80 px-3 py-1 text-xs font-medium text-white">
          Μετά
        </div>
      </div>

      <label htmlFor={sliderId} className="mt-4 block text-sm font-medium text-zinc-600">
        Σύγκριση πριν και μετά
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-2 w-full accent-emerald-600"
        aria-label="Ρυθμιστικό σύγκρισης πριν και μετά"
      />
    </article>
  );
}
