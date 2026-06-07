import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-8 border-b border-line">
        <Link href="/" className="text-lg font-semibold">
          Sharon Shineberg
        </Link>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:opacity-60 transition"
        >
          Book a Free Call
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-32 text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted mb-8">
          Entrepreneur & Innovation Analyst
        </p>

        <h1 className="text-7xl font-bold leading-tight mb-8">
          You're diving in.
          <br />
          I'm an Entrepreneur & Innovation Analyst.
        </h1>

        <p className="text-xl text-body mb-12 max-w-2xl mx-auto leading-relaxed">
          I build autonomous systems that acquire customers, analyze markets,
          and explore the unknown. Builder, strategist, and explorer of what's
          possible.
        </p>

        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-black text-white text-sm font-medium hover:opacity-80 transition"
        >
          Let's Talk
        </a>
      </section>

      {/* Divider */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* How I Work Section */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-16">
          How I Work
        </p>

        <div className="space-y-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-1">
              <p className="text-sm text-gray-500">01</p>
            </div>
            <div className="col-span-11">
              <h2 className="text-2xl font-bold mb-3">Project Partnership</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                You have a vision. I work alongside you from strategy through
                execution — helping you navigate uncertainty, identify
                opportunities, and build what matters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-1">
              <p className="text-sm text-gray-500">02</p>
            </div>
            <div className="col-span-11">
              <h2 className="text-2xl font-bold mb-3">Consulting & Analysis</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Specific questions. Deep dives. Hourly or project-based analysis
                on market strategy, agent systems, competitive intelligence, or
                navigating the unknown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* lonoda Preview */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted mb-8">
          lonoda
        </p>
        <h2 className="text-3xl font-bold mb-4">Places I Dive Into</h2>
        <p className="text-gray-700 text-lg mb-12">
          Projects where outcomes are uncertain, problems are real, and I build
          in public.
        </p>

        <div className="space-y-8 mb-12">
          <div className="pb-8 border-b border-gray-300">
            <div className="flex gap-4 mb-3">
              <span className="text-3xl">🤖</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Agentic Agency</h3>
                <p className="text-sm text-muted mt-1">Active</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 ml-14">
              Building autonomous systems that acquire customers through
              LinkedIn, WhatsApp, and partnerships.
            </p>
          </div>

          <div className="pb-8 border-b border-gray-300">
            <div className="flex gap-4 mb-3">
              <span className="text-3xl">🎙️</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">The-Last-Founder Podcast</h3>
                <p className="text-sm text-muted mt-1">Recording</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 ml-14">
              Live experiments in building. Three founders build in real-time on
              camera, no script, no editing.
            </p>
          </div>
        </div>

        <Link href="/lonoda" className="text-ink font-medium hover:opacity-60">
          Explore all projects →
        </Link>
      </section>

      {/* Divider */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* Blog Preview */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted mb-8">
          Writing
        </p>
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <p className="text-gray-700 text-lg mb-12">
          Thoughts on building, innovation, agents, and the projects in lonoda.
        </p>

        <div className="pb-8 border-b border-gray-300 mb-12">
          <div className="mb-3">
            <span className="text-xs uppercase tracking-wide text-gray-600">
              Projects
            </span>
            <p className="text-xs text-muted mt-1">June 2026</p>
          </div>
          <h3 className="text-2xl font-bold mb-3">
            lezel: From Cannabis Research to AI-Powered Personalization
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            In 2019, I was asked to research cannabis. What I discovered became
            a 6-year journey into building a company that uses AI to help people
            personalize their own use.
          </p>
          <Link
            href="/blog/lezel-cannabis-ai"
            className="text-ink underline hover:opacity-60 font-medium"
          >
            Read article →
          </Link>
        </div>

        <Link href="/blog" className="text-black font-medium hover:opacity-60">
          Read all articles →
        </Link>
      </section>

      {/* Divider */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* CTA Section */}
      <section className="px-8 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-6xl font-bold mb-4">
          Ready to see the full picture?
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          The first 30 minutes are on me.
        </p>
        <p className="text-sm text-gray-500 italic mb-12">
          No commitment. No risk. Just clarity.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-black text-white text-sm font-medium hover:opacity-80 transition"
        >
          Book a Free Call
        </a>
      </section>

      {/* Footer */}
      <footer className="px-8 py-24 border-t border-line text-center text-sm text-muted">
        <p>© 2026 Sharon Shineberg</p>
      </footer>
    </div>
  );
}
