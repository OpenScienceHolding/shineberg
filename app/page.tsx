import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-8 border-b border-line">
        <Link href="/" className="text-lg font-semibold">
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

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-8 py-32">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            You're diving in.
          </h1>

          <p className="text-lg text-body mb-12 mx-auto">
            I'm an Entrepreneur & Innovation Analyst building autonomous systems
            for customer acquisition and market analysis.
          </p>

          <div className="flex justify-center">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-line text-center text-xs text-muted">
        <p>© 2026 Sharon Shineberg</p>
      </footer>
    </div>
  );
}
