import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
    <div className="min-h-screen bg-paper text-ink font-serif flex flex-col">
      <Nav />

      <section className="flex-1 px-8 py-24 max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Talk to my agent
        </h1>
        <p className="text-xl text-body mb-12 leading-relaxed">
          I&apos;m Sharon Shineberg - advisor and companion to ventures from day
          one. The fastest way to reach me is through my agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href={AGENT_MAILTO}
            className="inline-block text-center px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
          >
            Talk to my agent
          </a>
          <a
            href={TRUSTED_PEOPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-8 py-3 border border-ink text-ink text-sm font-medium hover:opacity-60 transition"
          >
            Connect your agent to mine
          </a>
        </div>
        <p className="text-sm text-muted mb-20">
          Or write directly to{" "}
          <span className="font-mono select-all text-ink">{AGENT_EMAIL}</span>
        </p>

        <h2 className="text-3xl font-bold mb-6">What my agent can help with</h2>
        <ul className="text-lg text-body mb-16 space-y-3 list-disc">
          <li>
            <strong className="text-ink">Fit check</strong>{" "}- whether working
            together makes sense, and in what shape.
          </li>
          <li>
            <strong className="text-ink">Scheduling</strong>{" "}- finding a time
            that works, without the back-and-forth.
          </li>
          <li>
            <strong className="text-ink">Routing</strong>{" "}- companies looking
            for AI strategy and execution go to{" "}
            <a
              href="https://reeftrh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-60"
            >
              Reef TRH
            </a>
            , my agency with Raviv.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">Boundaries</h2>
        <ul className="text-lg text-body mb-16 space-y-3 list-disc">
          <li>
            My agent answers, schedules and routes. It does not make commitments
            for me - every engagement starts with a defined scope, a decision
            point, and clear terms, and I review it personally.
          </li>
          <li>Nothing goes out under my name without my review.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">Prefer a human path?</h2>
        <p className="text-lg text-body">
          Already in touch? WhatsApp is fastest. Formal:{" "}
          <a
            href="mailto:sharon@shineberg.com"
            className="underline hover:opacity-60"
          >
            sharon@shineberg.com
          </a>
          .
        </p>
      </section>

      <Footer />
    </div>
  );
}
