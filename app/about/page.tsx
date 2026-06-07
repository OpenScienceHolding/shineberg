import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-ink">
        <Link href="/" className="text-sm font-semibold hover:opacity-60">
          Sharon Shineberg
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="/about" className="hover:opacity-60">
            About
          </Link>
          <Link href="/how-to-work" className="hover:opacity-60">
            How to Work
          </Link>
          <Link href="/lonoda" className="hover:opacity-60">
            lonoda
          </Link>
          <Link href="/blog" className="hover:opacity-60">
            Blog
          </Link>
        </div>
      </nav>

      <section className="px-8 py-24 flex justify-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-16 text-center">About Me</h1>

          <div className="space-y-12 text-lg text-body">
            <p className="text-center text-xl leading-relaxed">
              I'm an entrepreneur and innovation analyst. My mission: help
              companies navigate complexity and build tomorrow's solutions using
              AI and strategic thinking.
            </p>

            {/* Timeline */}
            <div className="space-y-12 py-8 border-y border-line">
              <div className="space-y-2">
                <p className="text-sm font-bold text-muted">2009</p>
                <h3 className="text-2xl font-bold">Market Research Business</h3>
                <p>
                  Founded my first company focused on identifying emerging
                  market trends. This taught me how to see signals others miss
                  and predict where the market is heading.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted">2013</p>
                <h3 className="text-2xl font-bold">
                  Mela — Micro-Video Social Network
                </h3>
                <p>
                  Built a social platform focused on micro-video content before
                  TikTok existed. Learned what it takes to build consumer
                  products and navigate competitive markets.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted">2016</p>
                <h3 className="text-2xl font-bold">
                  Feezback — Fintech Startup
                </h3>
                <p>
                  Co-founded a fintech company. Explored how technology reshapes
                  financial systems and the importance of solving real user pain
                  points.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted">2017</p>
                <h3 className="text-2xl font-bold">
                  Strategic Advisor at Blond 2.0
                </h3>
                <p>
                  Worked as strategic consultant helping portfolio companies
                  navigate growth and complex market challenges.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted">2019</p>
                <h3 className="text-2xl font-bold">
                  lezel — AI & Consciousness
                </h3>
                <p>
                  Founded lezel, an AI company exploring consciousness and
                  intelligence. This sparked my deep dive into what AI can truly
                  do—not just automation, but genuine intelligence and
                  understanding.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted">2025+</p>
                <h3 className="text-2xl font-bold">
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
              <h2 className="text-3xl font-bold">What I've Learned</h2>
              <p>
                The pattern across all these ventures: the best breakthroughs
                happen at the edge of what's unknown. That's why I call my
                portfolio <strong>"lonoda"</strong>—a place where you enter a
                place you don't know what will happen there, and you dive in.
              </p>
              <p>
                I'm obsessed with finding signals in noise, understanding what's
                emerging before it becomes obvious, and building systems that
                actually work—not just theories.
              </p>
            </div>

            {/* Current Work */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What I'm Building Now</h2>
              <p>
                <strong>Agentic Agency</strong> — Autonomous customer
                acquisition systems that help companies grow through AI agents
              </p>
              <p>
                <strong>The-Last-Founder Podcast</strong> — Real-time
                experiments in building, no script, no polish, just raw
                entrepreneurship
              </p>
              <p>
                <strong>unschool.live</strong> — Rethinking education through
                personalized AI learning
              </p>
            </div>

            {/* How I Work */}
            <div className="space-y-4 pt-8 border-t border-line">
              <h2 className="text-2xl font-bold">How I Work Best</h2>
              <p>I work with people who:</p>
              <ul className="space-y-2 ml-6">
                <li>✓ Are comfortable with ambiguity and uncertainty</li>
                <li>✓ Think in systems, not just tactics</li>
                <li>✓ Want to understand the "why" before execution</li>
                <li>✓ Are ready to move fast and iterate</li>
                <li>
                  ✓ Believe AI is a tool for strategy, not just automation
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-line text-center">
            <Link
              href="/how-to-work"
              className="text-ink font-medium hover:opacity-60"
            >
              → Let's work together
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
