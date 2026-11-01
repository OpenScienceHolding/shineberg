import { NightShell } from "../components/NightShell";
import { TrackedLink } from "../components/TrackedLink";

export default function About() {
  return (
    <NightShell current="/about">
      <section className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="max-w-[760px]">
          <h1 className="font-display font-extrabold text-[clamp(48px,6vw,76px)] leading-[0.98] tracking-[-0.03em] mb-12">
            About Me
          </h1>

          <div className="space-y-12 text-lg text-bone-2">
            <p className="text-xl leading-[1.55] text-bone-2">
              I&apos;m an entrepreneur - and an advisor and companion to ventures
              from day one. Direct talk, defined scope, real partnership.
            </p>

            {/* Timeline */}
            <div className="flex flex-col border-t border-night-line">
              <div className="space-y-2 py-8 border-b border-night-line">
                <p className="font-mono text-[13px] text-lime">2009</p>
                <h3 className="font-display font-semibold text-2xl text-bone">Market Research Business</h3>
                <p>
                  Founded my first company focused on identifying emerging
                  market trends. This taught me how to see signals others miss
                  and predict where the market is heading.
                </p>
              </div>

              <div className="space-y-2 py-8 border-b border-night-line">
                <p className="font-mono text-[13px] text-lime">2013</p>
                <h3 className="font-display font-semibold text-2xl text-bone">
                  Mela — Micro-Video Social Network
                </h3>
                <p>
                  Built a social platform focused on micro-video content before
                  TikTok existed. Learned what it takes to build consumer
                  products and navigate competitive markets.
                </p>
              </div>

              <div className="space-y-2 py-8 border-b border-night-line">
                <p className="font-mono text-[13px] text-lime">2016</p>
                <h3 className="font-display font-semibold text-2xl text-bone">
                  Feezback — Fintech Startup
                </h3>
                <p>
                  Co-founded a fintech company. Explored how technology reshapes
                  financial systems and the importance of solving real user pain
                  points.
                </p>
              </div>

              <div className="space-y-2 py-8 border-b border-night-line">
                <p className="font-mono text-[13px] text-lime">2017</p>
                <h3 className="font-display font-semibold text-2xl text-bone">
                  Strategic Advisor at Blond 2.0
                </h3>
                <p>
                  Worked as strategic consultant helping portfolio companies
                  navigate growth and complex market challenges.
                </p>
              </div>

              <div className="space-y-2 py-8 border-b border-night-line">
                <p className="font-mono text-[13px] text-lime">2019</p>
                <h3 className="font-display font-semibold text-2xl text-bone">
                  lezel — AI & Consciousness
                </h3>
                <p>
                  Founded lezel, an AI company exploring consciousness and
                  intelligence. This sparked my deep dive into what AI can truly
                  do—not just automation, but genuine intelligence and
                  understanding.
                </p>
              </div>

              <div className="space-y-2 py-8 border-b border-night-line">
                <p className="font-mono text-[13px] text-lime">2025+</p>
                <h3 className="font-display font-semibold text-2xl text-bone">
                  The Age of Agentic Systems
                </h3>
                <p>
                  Building in a new wave of AI-driven transformation. Using
                  autonomous agents and strategic systems to help companies
                  rebuild themselves from the ground up. This is where I see the
                  biggest opportunity to create value.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="space-y-4">
              <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] text-bone">What I&apos;ve Learned</h2>
              <p>
                The pattern across all these ventures: the best breakthroughs
                happen at the edge of what&apos;s unknown. That&apos;s why I call my
                portfolio <strong>&quot;lonoda&quot;</strong>—a place where you enter a
                place you don&apos;t know what will happen there, and you dive in.
              </p>
              <p>
                I&apos;m obsessed with finding signals in noise, understanding what&apos;s
                emerging before it becomes obvious, and building systems that
                actually work—not just theories.
              </p>
            </div>

            {/* Current Work */}
            <div className="space-y-4">
              <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] text-bone">What I&apos;m Building Now</h2>
              <p>
                <a
                  href="https://reeftrh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline decoration-night-edge underline-offset-4 hover:decoration-lime"
                >
                  <strong>Reef TRH</strong>
                </a>{" "}
                — AI strategy and execution for companies: diagnosis first,
                then systems that deliver return. My agency with Raviv.
              </p>
              <p>
                <a
                  href="https://thelastfounder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone underline decoration-night-edge underline-offset-4 hover:decoration-lime"
                >
                  <strong>The-Last-Founder Podcast</strong>
                </a>{" "}
                — Real-time
                experiments in building, no script, no polish, just raw
                entrepreneurship
              </p>
              <p>
                <strong>unschool.live</strong> — Rethinking education through
                personalized AI learning
              </p>
            </div>

            {/* How I Work */}
            <div className="space-y-4 pt-8 border-t border-night-line">
              <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] text-bone">
                How I Work Best
              </h2>
              <p>I work with people who:</p>
              <ul className="space-y-2 ps-6 list-disc">
                <li>✓ Are comfortable with ambiguity and uncertainty</li>
                <li>✓ Think in systems, not just tactics</li>
                <li>✓ Want to understand the &quot;why&quot; before execution</li>
                <li>✓ Are ready to move fast and iterate</li>
                <li>
                  ✓ Believe AI is a tool for strategy, not just automation
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-night-line">
            <TrackedLink
              href="/how-to-work"
              className="inline-flex items-center gap-2 text-bone font-medium border-b border-night-edge hover:border-lime"
              event="contact_click"
              params={{ method: "work_with_me", location: "about" }}
            >
              → Let&apos;s work together
            </TrackedLink>
          </div>
        </div>
      </section>
    </NightShell>
  );
}
