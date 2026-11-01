import type { Metadata } from "next";
import { NightShell } from "../components/NightShell";
import { TrackedLink } from "../components/TrackedLink";
import { AGENT_EMAIL, AGENT_MAILTO, TRUSTED_PEOPLE_URL } from "../lib/contact";

export const metadata: Metadata = {
  title: "Talk to my agent | Sharon Shineberg",
  description:
    "The fastest way to reach Sharon Shineberg - advisor and companion to ventures from day one - is through his agent: fit check, scheduling, and routing to Reef TRH.",
  openGraph: {
    title: "Talk to my agent | Sharon Shineberg",
    description:
      "The fastest way to reach Sharon Shineberg - advisor and companion to ventures from day one - is through his agent: fit check, scheduling, and routing to Reef TRH.",
    url: "https://shineberg.com/agent",
  },
};

export default function Agent() {
  return (
    <NightShell current="/agent">
      <section className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="max-w-[760px] w-full">
        <h1 className="font-display font-extrabold text-[clamp(48px,6vw,76px)] leading-[0.98] tracking-[-0.03em] mb-8">
          Talk to my agent
        </h1>
        <p className="text-xl text-bone-2 mb-12 leading-relaxed">
          I&apos;m Sharon Shineberg - advisor and companion to ventures from day
          one. The fastest way to reach me is through my agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <TrackedLink
            href={AGENT_MAILTO}
            className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-full bg-lime text-night font-semibold hover:opacity-90 transition"
            event="contact_click"
            params={{ method: "agent_email", location: "agent" }}
          >
            Talk to my agent
          </TrackedLink>
          <TrackedLink
            href={TRUSTED_PEOPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-full border border-night-edge text-bone font-medium hover:border-fog transition"
            event="contact_click"
            params={{ method: "agent_connect", location: "agent" }}
          >
            Connect your agent to mine
          </TrackedLink>
        </div>
        <p className="text-sm text-fog mb-20">
          Or write directly to{" "}
          <span className="font-mono select-all text-bone">{AGENT_EMAIL}</span>
        </p>

        <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] mb-6">
          What my agent can help with
        </h2>
        <ul className="text-lg text-bone-2 mb-16 space-y-3 list-disc ps-6">
          <li>
            <strong className="text-bone">Fit check</strong>{" "}- whether working
            together makes sense, and in what shape.
          </li>
          <li>
            <strong className="text-bone">Scheduling</strong>{" "}- finding a time
            that works, without the back-and-forth.
          </li>
          <li>
            <strong className="text-bone">Routing</strong>{" "}- companies looking
            for AI strategy and execution go to{" "}
            <a
              href="https://reeftrh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone underline decoration-night-edge underline-offset-4 hover:decoration-lime"
            >
              Reef TRH
            </a>
            , my agency with Raviv.
          </li>
        </ul>

        <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] mb-6">
          Boundaries
        </h2>
        <ul className="text-lg text-bone-2 mb-16 space-y-3 list-disc ps-6">
          <li>
            My agent answers, schedules and routes. It does not make commitments
            for me - every engagement starts with a defined scope, a decision
            point, and clear terms, and I review it personally.
          </li>
          <li>Nothing goes out under my name without my review.</li>
        </ul>

        <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] mb-6">
          Prefer a human path?
        </h2>
        <p className="text-lg text-bone-2">
          Already in touch? WhatsApp is fastest. Formal:{" "}
          <TrackedLink
            href="mailto:sharon@shineberg.com"
            className="text-bone underline decoration-night-edge underline-offset-4 hover:decoration-lime"
            event="contact_click"
            params={{ method: "email", location: "agent" }}
          >
            sharon@shineberg.com
          </TrackedLink>
          .
        </p>
        </div>
      </section>
    </NightShell>
  );
}
