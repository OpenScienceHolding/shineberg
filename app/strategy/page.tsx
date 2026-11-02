import type { Metadata } from "next";
import Link from "next/link";
import { NightFooter } from "../components/NightFooter";
import { NightHeader } from "../components/NightHeader";
import { SessionSteps } from "../components/SessionSteps";
import { TrackedLink } from "../components/TrackedLink";
import {
  audiences,
  faqs,
  formats,
  jsonLdScript,
  outcomes,
  questions,
  strategyDescription,
  strategyFaqJsonLd,
  strategyOgTitle,
  strategyServiceJsonLd,
  STRATEGY_URL,
  strategyTitle,
} from "../lib/strategy";

export const metadata: Metadata = {
  title: strategyTitle,
  description: strategyDescription,
  alternates: { canonical: STRATEGY_URL },
  openGraph: {
    title: strategyOgTitle,
    description: strategyDescription,
    url: STRATEGY_URL,
  },
};

const sectionTitle =
  "font-display font-extrabold text-[clamp(36px,4.4vw,56px)] leading-[1.02] tracking-[-0.03em]";

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

function External() {
  return (
    <svg
      width="16"
      height="16"
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

export default function Strategy() {
  return (
    <div className="theme-night min-h-screen bg-night text-bone font-body text-[17px] leading-[1.6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(strategyServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(strategyFaqJsonLd) }}
      />
      <NightHeader current="/strategy" />

      <section className="max-w-[1240px] mx-auto px-6 pt-24 pb-20">
        <div className="max-w-[820px] flex flex-col gap-7">
          <h1 className="font-display font-extrabold text-[clamp(52px,7vw,96px)] leading-[0.95] tracking-[-0.035em]">
            Strategy consulting
          </h1>
          <p className="max-w-[640px] text-xl leading-[1.55] text-bone-2">
            You have a hard call in front of you. I help you see it clearly,
            say what&apos;s weak out loud, and leave with a decision - not a
            deck.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <TrackedLink
              href="/book"
              className="inline-flex items-center gap-2.5 min-h-[52px] px-[26px] rounded-full bg-lime text-night font-semibold transition hover:opacity-90"
              event="strategy_book"
              params={{ location: "hero" }}
            >
              Book a working session
              <Arrow />
            </TrackedLink>
            <TrackedLink
              href="/how-to-work"
              className="inline-flex items-center gap-2.5 min-h-[52px] px-[26px] rounded-full border border-night-edge text-bone font-medium transition hover:border-fog"
              event="strategy_how"
              params={{ location: "hero" }}
            >
              How I work
              <Arrow />
            </TrackedLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="who-h"
        className="border-t border-night-line bg-night-2"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-24 flex flex-col gap-12">
          <h2 id="who-h" className={sectionTitle}>
            Who it&apos;s for
          </h2>
          <ul className="list-none grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {audiences.map((item) => (
              <li
                key={item.title}
                className="bg-night-card border border-night-line rounded-[20px] p-8 flex flex-col gap-3"
              >
                <p className="text-lg leading-[1.5]">
                  <strong className="font-display font-semibold text-[26px] leading-[1.15] block mb-3">
                    {item.title}
                  </strong>
                  <span className="text-base text-bone-2">{item.body}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="max-w-[720px] text-lg text-bone-2">
            If you need AI systems built, not a strategic call, that&apos;s{" "}
            <a
              href="https://reeftrh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone border-b border-night-edge hover:border-lime inline-flex items-center gap-1.5"
            >
              Reef TRH
              <External />
            </a>{" "}
            - my agency with Raviv.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="questions-h"
        className="max-w-[1240px] mx-auto px-6 py-24 flex flex-col gap-10"
      >
        <h2 id="questions-h" className={sectionTitle}>
          The questions people bring me
        </h2>
        <ul className="list-none max-w-[820px] flex flex-col">
          {questions.map((question) => (
            <li
              key={question}
              className="py-6 border-t border-night-line last:border-b font-display text-[clamp(22px,2.4vw,32px)] leading-[1.25] tracking-[-0.02em]"
            >
              &ldquo;{question}&rdquo;
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="how-h"
        className="border-t border-night-line bg-night-2"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-24 flex flex-col gap-12">
          <h2 id="how-h" className={sectionTitle}>
            How it works
          </h2>
          <ol className="list-none grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {formats.map((format) => (
              <li
                key={format.title}
                className="bg-night-card border border-night-line rounded-[20px] p-8 flex flex-col gap-4"
              >
                <h3 className="font-display font-semibold text-[26px] leading-[1.15]">
                  {format.title}
                </h3>
                <p className="text-base text-bone-2">{format.body}</p>
              </li>
            ))}
          </ol>
          <SessionSteps />
          <p className="text-lg text-bone-2">
            Every format starts the same way: scope before work.{" "}
            <TrackedLink
              href="/how-to-work"
              className="inline-flex items-center gap-2 text-bone font-medium border-b border-night-edge hover:border-fog"
              event="strategy_how"
              params={{ location: "how_it_works" }}
            >
              More on how I work
              <Arrow size={16} />
            </TrackedLink>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="get-h"
        className="max-w-[1240px] mx-auto px-6 py-24 flex flex-col gap-10"
      >
        <h2 id="get-h" className={sectionTitle}>
          What you get
        </h2>
        <ul className="list-none max-w-[820px] flex flex-col">
          {outcomes.map((item) => (
            <li
              key={item.title}
              className="py-6 border-t border-night-line last:border-b flex flex-col gap-2"
            >
              <h3 className="font-display font-semibold text-[22px] leading-[1.2]">
                {item.title}
              </h3>
              <p className="text-bone-2">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="why-h"
        className="border-t border-night-line bg-night-2"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <div className="max-w-[760px] flex flex-col gap-6">
            <h2 id="why-h" className={sectionTitle}>
              Why me
            </h2>
            <p className="text-lg text-bone-2">
              I&apos;ve been on both sides of the table since 2009: founder
              (Mela, Feezback, lezel), strategic advisor to portfolio companies
              at Blond 2.0, and today building with agents across Reef TRH, The
              Last Founder and unschool.live. I push back when something sounds
              generic. That&apos;s not friction - it&apos;s how we get to the
              real thing.
            </p>
            <p className="text-lg text-bone-2">
              The work is personal, so I don&apos;t publish client stories.
            </p>
            <div className="bg-night-card border border-night-line rounded-[20px] p-8 flex flex-col gap-4">
              <h3 className="font-display font-semibold text-[26px] leading-[1.15]">
                How to check me out
              </h3>
              <p className="text-lg text-bone-2">
                I can introduce you to someone I&apos;ve worked with, after we
                talk and only if they agree. Happy to sign an NDA before you
                share anything. See the ventures I founded (Mela, Feezback,
                lezel) and read how I think on the{" "}
                <Link
                  href="/blog"
                  className="text-bone border-b border-night-edge hover:border-lime"
                >
                  blog
                </Link>{" "}
                and on{" "}
                <a
                  href="https://thelastfounder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone border-b border-night-edge hover:border-lime"
                >
                  The Last Founder
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-h"
        className="max-w-[1240px] mx-auto px-6 py-24 flex flex-col gap-10"
      >
        <h2 id="faq-h" className={sectionTitle}>
          FAQ
        </h2>
        <dl className="max-w-[820px] flex flex-col">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="py-6 border-t border-night-line last:border-b flex flex-col gap-2"
            >
              <dt className="font-display font-semibold text-[22px] leading-[1.25]">
                {faq.question}
              </dt>
              <dd className="text-bone-2">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="cta-h"
        className="px-6 pt-8 pb-24 border-t border-night-line"
      >
        <div className="max-w-[1240px] mx-auto rounded-[32px] border border-night-line bg-night-card p-6 md:p-[clamp(32px,6vw,88px)] flex flex-col gap-8">
          <div className="max-w-[720px] flex flex-col gap-5">
            <h2
              id="cta-h"
              className="font-display font-extrabold text-[clamp(40px,5.5vw,72px)] leading-[0.95] tracking-[-0.035em]"
            >
              Bring one hard question.
            </h2>
            <p className="text-lg text-bone-2">
              Come with the purpose in one line. We&apos;ll use the time to
              decide something.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <TrackedLink
              href="/book"
              className="inline-flex items-center gap-2.5 min-h-14 px-6 rounded-full bg-lime text-night font-semibold text-[16px] whitespace-nowrap transition hover:opacity-90"
              event="strategy_book"
              params={{ location: "cta" }}
            >
              Book a working session
              <Arrow />
            </TrackedLink>
            <span className="inline-flex items-center gap-3">
              <span className="text-fog">or</span>
              <TrackedLink
                href="/agent"
                className="inline-flex items-center gap-2 min-h-11 text-bone font-medium border-b border-night-edge hover:border-fog"
                event="strategy_agent"
              >
                talk to my agent
                <Arrow size={16} />
              </TrackedLink>
            </span>
          </div>
        </div>
      </section>

      <NightFooter />
    </div>
  );
}
