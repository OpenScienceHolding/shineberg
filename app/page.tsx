import type { Metadata } from "next";
import Link from "next/link";
import { NightFooter } from "./components/NightFooter";
import { NightHeader } from "./components/NightHeader";
import { TrackedLink } from "./components/TrackedLink";
import { AGENT_EMAIL, agentMailto } from "./lib/contact";
import { homeJsonLd, jsonLdScript } from "./lib/jsonld";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const eyebrow = "font-mono text-[13px] uppercase tracking-[0.12em] text-fog";
const sectionTitle =
  "font-display font-extrabold text-[clamp(36px,4.4vw,60px)] leading-[1.02] tracking-[-0.03em]";
const pillOutline =
  "inline-flex items-center gap-2.5 min-h-[52px] px-[26px] rounded-full border border-night-edge text-bone font-medium transition hover:border-fog";
const textLink =
  "inline-flex items-center gap-2 min-h-11 text-bone font-medium border-b border-night-edge transition hover:border-fog";
const chip =
  "inline-flex items-center min-h-11 px-3.5 rounded-full border border-night-edge text-sm text-[#dad8d0] transition hover:border-fog";

const timeline = [
  {
    year: "2009",
    title: "Market research",
    note: "Spotting emerging trends early",
  },
  { year: "2013", title: "Mela", note: "Micro-video social, before TikTok" },
  { year: "2016", title: "Feezback", note: "Fintech, co-founder" },
  {
    year: "2017",
    title: "Blond 2.0",
    note: "Strategic advisor to portfolio cos.",
  },
  { year: "2019", title: "lezel", note: "AI, consciousness & intelligence" },
  {
    year: "2025 → now",
    title: "Agentic systems",
    note: "Helping companies rebuild with agents",
    current: true,
  },
];

const ways = [
  {
    n: "01",
    title: "I join your venture",
    body: "Advisor, consultant or part-time strategic lead — from a single meeting to a long-term partnership.",
    bestFor: "Teams with traction & a hard call",
    startsWith: "One focused working session",
  },
  {
    n: "02",
    title: "Build something new together",
    body: "You have the idea. We work through strategy, system design, go-to-market and execution.",
    bestFor: "Founders before or at launch",
    startsWith: "A defined scope, in writing",
  },
  {
    n: "03",
    title: "Join one of my ventures",
    body: "Reef TRH, The Last Founder or unschool.live — with an open conversation on equity, roles and goals.",
    bestFor: "Operators who want skin in the game",
    startsWith: "A conversation about fit",
  },
];

const fit = [
  "are comfortable with ambiguity",
  "think in systems, not tasks",
  "want the “why” before the execution",
  "are ready to move fast and iterate",
  "see AI as a tool for strategy, not just automation",
];

const starters = [
  "I have an idea — need GTM",
  "We need an AI strategy",
  "Join our venture?",
];

function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function External({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="theme-night min-h-screen bg-night text-bone font-body text-[17px] leading-[1.6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeJsonLd) }}
      />
      <NightHeader />

      {/* Hero */}
      <section className="max-w-[1240px] mx-auto px-6 pt-24 pb-[88px] flex flex-wrap items-end gap-14">
        <div className="flex-[999_1_560px] min-w-0 flex flex-col gap-7">
          <p className={eyebrow}>
            Advisor &amp; companion to ventures · since 2009
          </p>
          <h1 className="font-display font-extrabold text-[clamp(52px,7.2vw,108px)] leading-[0.95] tracking-[-0.035em]">
            From day one
            <br />
            to the edge of <span className="text-lime">the unknown.</span>
          </h1>
          <p className="max-w-[560px] text-xl leading-[1.55] text-bone-2">
            I work with founders, teams and executives facing uncertainty —
            combining strategic analysis with hands-on building. Direct talk.
            Defined scope. Real partnership.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <TrackedLink
              href="/how-to-work"
              className="inline-flex items-center gap-2.5 min-h-[52px] px-[26px] rounded-full bg-lime text-night font-semibold transition hover:opacity-90"
              event="contact_click"
              params={{ method: "work_with_me", location: "home" }}
            >
              Work with me
              <Arrow />
            </TrackedLink>
            <a
              href="https://reeftrh.com"
              target="_blank"
              rel="noopener noreferrer"
              className={pillOutline}
            >
              For companies — Reef TRH
              <External />
            </a>
          </div>
        </div>

        {/* Agent card: opens the visitor's mail client addressed to the agent. */}
        <div
          id="agent"
          className="flex-[1_1_360px] min-w-0 flex flex-col gap-[18px] bg-night-card border border-night-line rounded-[20px] p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="w-9 h-9 rounded-[10px] bg-[#23261f] inline-flex items-center justify-center text-lime"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="7" width="16" height="12" rx="3" />
                  <path d="M12 7V4M9 13h.01M15 13h.01" />
                </svg>
              </span>
              <div className="flex flex-col leading-[1.3]">
                <span className="font-semibold text-[15px]">
                  Sharon&apos;s agent
                </span>
                <span className="font-mono text-xs text-fog">
                  online · replies by email
                </span>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="w-2.5 h-2.5 rounded-full bg-lime shadow-[0_0_0_6px_rgba(212,255,58,0.12)]"
            />
          </div>
          <p className="bg-[#1f221c] rounded-[14px_14px_14px_4px] px-4 py-3.5 text-[15px] leading-[1.55] text-[#dad8d0]">
            Hi — tell me where you&apos;re stuck. I&apos;ll route you to the
            right next step: a call with Sharon, a scoped project, or a straight
            answer.
          </p>
          <div className="flex flex-wrap gap-2">
            {starters.map((text) => (
              <TrackedLink
                key={text}
                href={agentMailto(text)}
                className={chip}
                event="contact_click"
                params={{ method: "agent_starter", location: "home" }}
              >
                {text}
              </TrackedLink>
            ))}
          </div>
          <form
            action={`mailto:${AGENT_EMAIL}`}
            method="get"
            className="flex gap-2"
          >
            <input
              type="hidden"
              name="subject"
              value="Hello from shineberg.com"
            />
            <label htmlFor="agent-q" className="sr-only">
              Ask Sharon&apos;s agent
            </label>
            <input
              id="agent-q"
              name="body"
              type="text"
              placeholder="Describe your situation…"
              className="flex-auto min-w-0 min-h-12 px-4 rounded-xl border border-night-edge bg-night text-bone text-[15px] placeholder:text-fog focus:outline-none focus:border-lime"
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-12 h-12 flex-none rounded-xl bg-lime text-night inline-flex items-center justify-center transition hover:opacity-90"
            >
              <Arrow />
            </button>
          </form>
        </div>
      </section>

      {/* Track record */}
      <section
        aria-labelledby="track-h"
        className="border-y border-night-line bg-night-2"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-14 flex flex-col gap-8">
          <h2 id="track-h" className={`${eyebrow} font-medium`}>
            <span className="text-lime">01 /</span> 17 years at the edge
          </h2>
          <ol className="list-none grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-6">
            {timeline.map((t) => (
              <li
                key={t.year}
                className={`border-t-2 pt-4 flex flex-col gap-1.5 ${
                  t.current ? "border-lime" : "border-night-edge"
                }`}
              >
                <span
                  className={`font-mono text-[13px] ${
                    t.current ? "text-lime" : "text-fog"
                  }`}
                >
                  {t.year}
                </span>
                <span className="font-display font-semibold text-xl">
                  {t.title}
                </span>
                <span className="text-sm leading-[1.5] text-fog">{t.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How I work */}
      <section
        aria-labelledby="work-h"
        className="max-w-[1240px] mx-auto px-6 pt-28 pb-24 flex flex-col gap-12"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-[720px]">
            <p className={eyebrow}>
              <span className="text-lime">02 /</span> How I work
            </p>
            <h2 id="work-h" className={sectionTitle}>
              Three ways in. Pick the one that fits where you are.
            </h2>
          </div>
          <Link href="/how-to-work" className={textLink}>
            See how I work
            <Arrow size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {ways.map((w) => (
            <article
              key={w.n}
              className="bg-night-card border border-night-line rounded-[20px] p-8 flex flex-col gap-5"
            >
              <span className="font-display font-extrabold text-6xl leading-none text-night-edge">
                {w.n}
              </span>
              <h3 className="font-display font-semibold text-[26px] leading-[1.15]">
                {w.title}
              </h3>
              <p className="text-base text-bone-2">{w.body}</p>
              <dl className="mt-auto pt-5 border-t border-night-line flex flex-col gap-1.5 text-sm">
                <div className="flex gap-2">
                  <dt className="text-fog min-w-[76px]">Best for</dt>
                  <dd>{w.bestFor}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-fog min-w-[76px]">Starts with</dt>
                  <dd>{w.startsWith}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="strategy-h"
        className="border-t border-night-line"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-24 flex flex-wrap items-end justify-between gap-10">
          <div className="flex-[999_1_560px] min-w-0 max-w-[760px] flex flex-col gap-5">
            <h2 id="strategy-h" className={sectionTitle}>
              Strategy consulting
            </h2>
            <p className="max-w-[640px] text-lg leading-[1.55] text-bone-2">
              Facing a hard call - a new idea, a stalled venture, or a market
              shifting under you? Bring one concrete question. You&apos;ll get
              an honest read and a decision on the table, not a deck.
            </p>
          </div>
          <TrackedLink
            href="/strategy"
            className={textLink}
            event="home_strategy"
          >
            Strategy consulting
            <Arrow size={16} />
          </TrackedLink>
        </div>
      </section>

      {/* What I'm building */}
      <section aria-labelledby="build-h" className="border-t border-night-line">
        <div className="max-w-[1240px] mx-auto px-6 pt-28 pb-24 flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-[760px]">
              <p className={eyebrow}>
                <span className="text-lime">03 /</span> lonoda — what I&apos;m
                building
              </p>
              <h2 id="build-h" className={sectionTitle}>
                Ventures that walk into unknown territory on purpose.
              </h2>
            </div>
            <Link href="/lonoda" className={textLink}>
              Explore all projects
              <Arrow size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
            <a
              href="https://reeftrh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-full bg-lime text-night rounded-3xl p-10 flex flex-wrap items-end justify-between gap-8"
            >
              <div className="flex-[999_1_420px] min-w-0 flex flex-col gap-4">
                <span className="self-start font-mono text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded-full bg-night text-lime">
                  ● Active · Agency
                </span>
                <h3 className="font-display font-extrabold text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-[-0.035em]">
                  Reef TRH
                </h3>
                <p className="max-w-[560px] text-lg leading-[1.5]">
                  AI strategy and execution for companies. Diagnosis first —
                  then systems built to deliver return. Run together with Raviv.
                </p>
              </div>
              <span className="flex-none inline-flex items-center gap-2.5 min-h-[52px] px-6 rounded-full bg-night text-bone font-semibold">
                Visit reeftrh.com
                <External />
              </span>
            </a>

            <a
              href="https://thelastfounder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-night-card border border-night-line rounded-3xl p-8 flex flex-col gap-4 transition hover:border-night-edge"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-ember text-ember">
                  ● Recording
                </span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a3a399"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[32px] leading-[1.1]">
                The Last Founder
              </h3>
              <p className="text-base text-bone-2">
                A podcast where founders build a startup live on camera. No
                script. No edit.
              </p>
            </a>

            <div className="bg-night-card border border-night-line rounded-3xl p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-night-edge text-fog">
                  ○ Exploring
                </span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a3a399"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 9l9-5 9 5-9 5-9-5z" />
                  <path d="M7 11v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[32px] leading-[1.1]">
                unschool.live
              </h3>
              <p className="text-base text-bone-2">
                Rethinking education through personalized AI learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section
        aria-labelledby="fit-h"
        className="border-t border-night-line bg-night-2"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-28 flex flex-wrap gap-16">
          <div className="flex-[1_1_360px] min-w-0 flex flex-col gap-4">
            <p className={eyebrow}>
              <span className="text-lime">04 /</span> Is this a fit?
            </p>
            <h2 id="fit-h" className={sectionTitle}>
              We&apos;ll work well together if you…
            </h2>
          </div>
          <ul className="flex-[999_1_520px] min-w-0 list-none flex flex-col">
            {fit.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 py-[22px] font-display text-[22px] border-b border-night-line last:border-b-0"
              >
                <span className="font-mono text-[13px] text-lime">
                  {String.fromCharCode(65 + i)}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-h"
        className="px-6 pt-28 pb-24 border-t border-night-line"
      >
        <div className="max-w-[1240px] mx-auto rounded-[32px] border border-night-line bg-night-card p-[clamp(32px,6vw,88px)] flex flex-wrap items-end justify-between gap-12">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-5">
            <h2
              id="cta-h"
              className="font-display font-extrabold text-[clamp(44px,6vw,88px)] leading-[0.95] tracking-[-0.035em]"
            >
              Ready to step
              <br />
              into <span className="text-lime">the unknown?</span>
            </h2>
            <p className="max-w-[520px] text-lg text-bone-2">
              The fastest route is my agent — it knows my calendar, my ventures
              and what I can actually help with.
            </p>
          </div>
          <div className="flex-[1_1_280px] min-w-0 flex flex-col gap-3">
            <TrackedLink
              href="/agent"
              className="inline-flex items-center justify-center gap-2.5 min-h-14 px-7 rounded-full bg-lime text-night font-semibold text-[17px] transition hover:opacity-90"
              event="contact_click"
              params={{ method: "agent_page", location: "home" }}
            >
              Talk to my agent
              <Arrow />
            </TrackedLink>
            <TrackedLink
              href="mailto:sharon@shineberg.com"
              className="inline-flex items-center justify-center min-h-14 px-7 rounded-full border border-night-edge text-bone font-medium transition hover:border-fog"
              event="contact_click"
              params={{ method: "email", location: "home" }}
            >
              sharon@shineberg.com
            </TrackedLink>
          </div>
        </div>
      </section>

      <NightFooter />
    </div>
  );
}
