"use client";

import { useMemo, useState } from "react";

type Tone = "sweet" | "playful" | "poetic";

const templates: Record<Tone, string[]> = {
  sweet: [
    "Hey {name}, you make ordinary days feel special. {reason}",
    "Dear {name}, every moment with you feels like home. {reason}",
    "{name}, your smile is my favorite part of every day. {reason}",
  ],
  playful: [
    "Breaking news, {name}: you have officially stolen my heart. {reason}",
    "To {name}: I like you more than coffee, and that is serious. {reason}",
    "{name}, if love were a game, I would still choose your team. {reason}",
  ],
  poetic: [
    "{name}, in the quiet between heartbeats, I still find your name. {reason}",
    "If the sky could write, it would write about you, {name}. {reason}",
    "{name}, your presence turns simple hours into soft light. {reason}",
  ],
};

const fallbackReason = {
  sweet: "Thank you for being exactly who you are.",
  playful: "You are my favorite kind of chaos.",
  poetic: "You make my world feel wider and warmer.",
};

export default function Home() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [tone, setTone] = useState<Tone>("sweet");
  const [message, setMessage] = useState(
    "Write a name, pick a tone, and generate a love message."
  );

  const toneLabel = useMemo(() => {
    if (tone === "sweet") return "Sweet";
    if (tone === "playful") return "Playful";
    return "Poetic";
  }, [tone]);

  function generateMessage() {
    const selected = templates[tone];
    const template = selected[Math.floor(Math.random() * selected.length)];

    const finalName = name.trim() || "love";
    const finalReason = reason.trim() || fallbackReason[tone];

    setMessage(
      template
        .replace("{name}", finalName)
        .replace("{reason}", finalReason)
    );
  }

  return (
    <main className="min-h-screen px-5 py-10 sm:px-8 sm:py-14">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-rose-200/60 bg-white/80 p-6 shadow-xl shadow-rose-100 backdrop-blur-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
          Love Message Generator
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Create heartfelt messages in one click
        </h1>

        <div className="mt-8 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Alex"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">
              Why you love them
            </span>
            <textarea
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              rows={4}
              placeholder="Tell one thing you adore about them"
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Tone</span>
            <select
              value={tone}
              onChange={(event) => setTone(event.target.value as Tone)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            >
              <option value="sweet">Sweet</option>
              <option value="playful">Playful</option>
              <option value="poetic">Poetic</option>
            </select>
          </label>

          <button
            type="button"
            onClick={generateMessage}
            className="mt-2 rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-600 active:scale-[0.99]"
          >
            Generate {toneLabel} Message
          </button>
        </div>

        <article className="mt-8 rounded-2xl border border-rose-100 bg-rose-50 p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-rose-700">
            Your message
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-800">{message}</p>
        </article>
      </section>
    </main>
  );
}
