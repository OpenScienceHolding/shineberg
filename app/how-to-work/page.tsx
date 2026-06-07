import Link from "next/link";
import Footer from "../components/Footer";

export default function HowToWork() {
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
          <h1 className="text-6xl font-bold mb-8 text-center">
            How to Work With Me
          </h1>
          <p className="text-xl text-body text-center mb-16">
            I work with founders, teams, and companies navigating new
            challenges. Here are the main ways we can collaborate.
          </p>

          <div className="space-y-16">
            {/* Partnership Options */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Three Ways to Partner</h2>

              {/* Option 1 */}
              <div className="mb-12 pb-8 border-b border-line">
                <h3 className="text-2xl font-bold mb-3">
                  1. Join One of My Ventures
                </h3>
                <p className="text-lg text-body mb-3">
                  I'm building several companies right now that are creating
                  real impact: autonomous customer acquisition systems,
                  educational AI, and more.
                </p>
                <p className="text-body">
                  If you're interested in joining{" "}
                  <strong>Agentic Agency</strong>,
                  <strong>The-Last-Founder Podcast</strong>, or{" "}
                  <strong>unschool.live</strong>, let's talk about equity,
                  roles, and what you want to build.
                </p>
              </div>

              {/* Option 2 */}
              <div className="mb-12 pb-8 border-b border-line">
                <h3 className="text-2xl font-bold mb-3">
                  2. Build Something New Together
                </h3>
                <p className="text-lg text-body mb-3">
                  You have an idea. I have experience. Let's build it together.
                </p>
                <p className="text-body">
                  This works best if you're a founder, team, or operator ready
                  to move fast. We'll work through strategy, system design,
                  go-to-market, and execution.
                </p>
              </div>

              {/* Option 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  3. I Join Your Company
                </h3>
                <p className="text-lg text-body mb-3">
                  Your company is facing a new challenge. You need strategic
                  direction, AI system design, market analysis, or someone to
                  help navigate complexity.
                </p>
                <p className="text-body">
                  I can join as advisor, consultant, or part-time strategic
                  lead—whatever makes sense for your situation.
                </p>
              </div>
            </div>

            {/* Who I Work With */}
            <div className="pt-8 border-t border-line">
              <h2 className="text-3xl font-bold mb-6">Who I Work With</h2>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">New Startups</h4>
                  <p className="text-body">
                    You're building something new. You need strategic guidance,
                    market insights, or help designing AI/agent systems.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Existing Startups in Transition
                  </h4>
                  <p className="text-body">
                    You've found product-market fit but now need to scale,
                    pivot, or integrate AI into your core systems.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Companies Facing New Challenges
                  </h4>
                  <p className="text-body">
                    Whether it's market shifts, AI disruption, or organizational
                    change, you need someone who understands both strategy and
                    execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Engagement Model */}
            <div className="pt-8 border-t border-line">
              <h2 className="text-3xl font-bold mb-6">
                How Long Does This Take?
              </h2>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">Single Meeting</h4>
                  <p className="text-body">
                    You have a specific question. One deep conversation can
                    provide clarity and direction.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Multi-Month Engagement
                  </h4>
                  <p className="text-body">
                    You're building something that requires ongoing partnership.
                    Weeks to months of strategy, design, and execution support.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Long-Term Partnership
                  </h4>
                  <p className="text-body">
                    We're building together for the long haul. This could be
                    equity-based, advisory-based, or some combination.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="pt-8 border-t border-line">
              <h2 className="text-3xl font-bold mb-6">What Does It Cost?</h2>
              <p className="text-lg text-body mb-4">
                Right now, there's no fixed pricing. It depends on:
              </p>
              <ul className="space-y-2 text-body ml-6">
                <li>✓ The scope of work</li>
                <li>✓ Your stage (pre-revenue, early revenue, scaling)</li>
                <li>✓ Whether equity is involved</li>
                <li>✓ Length and depth of engagement</li>
              </ul>
              <p className="text-body mt-4">
                The best approach? Let's talk about what you're building and
                what you need. We'll figure out a structure that works for both
                of us.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-line text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Talk?</h2>
              <p className="text-lg text-body mb-8">
                Send me a message with what you're building and what you need.
              </p>
              <a
                href="mailto:sharon@shineberg.com"
                className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
              >
                sharon@shineberg.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
