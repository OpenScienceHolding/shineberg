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
        <div className="text-center max-w-3xl">
          {/* Label */}
          <p className="text-base uppercase tracking-widest text-muted mb-16">
            Design System
          </p>

          {/* Main Heading */}
          <h1 className="text-8xl md:text-9xl font-bold leading-tight mb-8">
            The system <br />
            <span className="italic font-normal">behind the dive.</span>
          </h1>

          {/* Description */}
          <p className="text-2xl text-body mb-16 max-w-2xl mx-auto leading-relaxed">
            Every color, type ramp and spacing step extracted straight from the
            live site — codified into tokens you can build on.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
            >
              Book a Free Call
            </a>
          </div>

          {/* Design Details */}
          <div className="mt-24 pt-12 border-t border-line">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
              <div>Entrepreneur & Innovation Analyst — Home</div>
              <div>—</div>
              <div>Warm paper / Light</div>
              <div>—</div>
              <div>7 color • 9 type • 8 space</div>
            </div>
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
