import Link from "next/link";

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

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">How to Work With Me</h1>

        <div className="space-y-16">
          {/* Project Partnership */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Partnership</h2>
            <p className="text-lg text-body mb-4">
              You have a specific vision—a new product, a market to enter, a
              system to build. I work alongside you from strategy through
              execution.
            </p>
            <p className="text-body mb-4">
              <strong>What this looks like:</strong> Strategy workshops,
              competitive analysis, agent system design, go-to-market planning,
              and direct involvement in building.
            </p>
            <p className="text-body">
              <strong>Best for:</strong> Founders, early-stage companies, and
              teams navigating the unknown.
            </p>
          </div>

          {/* Consulting */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Consulting & Analysis</h2>
            <p className="text-lg text-body mb-4">
              Specific questions. Specific problems. Hourly or project-based
              analysis.
            </p>
            <p className="text-body mb-4">
              <strong>What this looks like:</strong> Market research,
              opportunity analysis, system design reviews, agent strategy
              development, or competitive intelligence.
            </p>
            <p className="text-body">
              <strong>Best for:</strong> Teams needing external perspective,
              one-off strategic questions, or deep dives into specific markets.
            </p>
          </div>

          {/* Rate & Process */}
          <div className="pt-8 border-t border-line">
            <h2 className="text-2xl font-bold mb-4">Let's Talk First</h2>
            <p className="text-lg text-gray-700">
              Every project is different. Let's discuss what you're building,
              what you need, and how we can work best together.
            </p>
            <p className="text-body mt-4">
              <a
                href="mailto:sharon@shineberg.com"
                className="underline hover:opacity-60"
              >
                sharon@shineberg.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
