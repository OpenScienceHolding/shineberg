"use client";

import { useState } from "react";
import { CalEmbed } from "../components/CalEmbed";
import { trackEvent } from "../lib/analytics";
import { calLink, meetingTypes } from "../lib/booking";

export function BookingPicker() {
  const [selected, setSelected] = useState<string | null>(null);
  const meeting = meetingTypes.find((m) => m.slug === selected);

  const choose = (slug: string) => {
    setSelected(slug);
    trackEvent("booking_select", { meeting: slug });
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3 mb-12">
        {meetingTypes.map((m) => {
          const active = m.slug === selected;
          return (
            <button
              key={m.slug}
              type="button"
              onClick={() => choose(m.slug)}
              aria-pressed={active}
              className={`text-left p-6 rounded-[20px] border transition ${
                active
                  ? "border-lime bg-lime text-night"
                  : "border-night-line bg-night-card text-bone hover:border-night-edge"
              }`}
            >
              <span className="block font-mono text-[13px] mb-2 opacity-70">
                {m.minutes} min
              </span>
              <span className="block font-display text-xl font-semibold mb-3">
                {m.name}
              </span>
              <span
                className={`block text-base ${active ? "text-night/80" : "text-bone-2"}`}
              >
                {m.description}
              </span>
            </button>
          );
        })}
      </div>

      {meeting ? (
        <div className="border-t border-night-line pt-10">
          <h2 className="font-display font-semibold text-[32px] leading-[1.15] mb-6">
            {meeting.name}
          </h2>
          {/* The Cal.com embed stays on its own light theme. */}
          <div className="rounded-[20px] overflow-hidden bg-white">
            <CalEmbed
              key={meeting.slug}
              calLink={calLink(meeting.slug)}
              namespace={meeting.slug}
            />
          </div>
        </div>
      ) : (
        <p className="text-lg text-bone-2">
          Pick a meeting type to see open times.
        </p>
      )}
    </div>
  );
}
