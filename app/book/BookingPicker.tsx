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
              className={`text-left p-6 border transition ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line hover:border-ink"
              }`}
            >
              <span className="block text-sm mb-2 opacity-70">
                {m.minutes} min
              </span>
              <span className="block text-xl font-bold mb-3">{m.name}</span>
              <span
                className={`block text-base ${active ? "text-paper/80" : "text-body"}`}
              >
                {m.description}
              </span>
            </button>
          );
        })}
      </div>

      {meeting ? (
        <div className="border-t border-line pt-10">
          <h2 className="text-3xl font-bold mb-6">{meeting.name}</h2>
          <CalEmbed
            key={meeting.slug}
            calLink={calLink(meeting.slug)}
            namespace={meeting.slug}
          />
        </div>
      ) : (
        <p className="text-lg text-body text-center">
          Pick a meeting type to see open times.
        </p>
      )}
    </div>
  );
}
