import Link from "next/link";
import Footer from "./components/Footer";

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
            Work With Me
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
            Who I Am
          </p>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
            Advisor &amp; companion <br />
            <span className="italic font-normal">
              to ventures from day one.
            </span>
          </h1>

          {/* Description */}
          <p className="text-2xl text-body mb-16 max-w-2xl mx-auto leading-relaxed">
            Direct talk, defined scope, real partnership. I move fast when the
            plan is concrete.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <Link
              href="/how-to-work"
              className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
            >
              Work with me
            </Link>
            <a
              href="https://reeftrh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-ink text-ink text-sm font-medium hover:opacity-60 transition"
            >
              For companies — Reef TRH
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* Intro Section */}
      <section className="px-8 py-24 flex justify-center text-center">
        <p className="text-xl text-body mb-12 max-w-2xl leading-relaxed">
          Over the past decade, I've worked with founders, teams, and executives
          navigating uncertainty. I combine strategic analysis with hands-on
          building to help you see the full picture and move forward with
          confidence.
        </p>
      </section>

      {/* Services Preview */}
      <section className="px-8 py-24 flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted mb-16">
            How I Work
          </p>

          <div className="space-y-16 mb-12">
            <div>
              <p className="text-sm text-muted mb-3">01</p>
              <h2 className="text-3xl font-bold mb-3">Join one of my ventures</h2>
              <p className="text-lg text-body leading-relaxed">
                Reef TRH, The-Last-Founder Podcast, unschool.live - let&apos;s talk about equity, roles, and what you want to build.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted mb-3">02</p>
              <h2 className="text-3xl font-bold mb-3">Build something new together</h2>
              <p className="text-lg text-body leading-relaxed">
                You have an idea, I have experience. Strategy, system design, go-to-market, and execution.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted mb-3">03</p>
              <h2 className="text-3xl font-bold mb-3">I join your venture</h2>
              <p className="text-lg text-body leading-relaxed">
                As advisor, consultant, or part-time strategic lead - from a single deep meeting to a long-term partnership.
              </p>
            </div>
          </div>

          <Link
            href="/how-to-work"
            className="text-ink font-medium hover:opacity-60"
          >
            See how I work →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* Projects Preview */}
      <section className="px-8 py-24 flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted mb-16">
            What I'm Building
          </p>

          <div className="space-y-8 mb-12">
            <div className="pb-8 border-b border-line">
              <div className="flex flex-col items-center gap-4 mb-3">
                <span className="text-3xl">🤖</span>
                <div>
                  <h3 className="text-2xl font-bold">
                    <a
                      href="https://reeftrh.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60"
                    >
                      Reef TRH
                    </a>
                  </h3>
                  <p className="text-sm text-muted mt-1">Active</p>
                </div>
              </div>
              <p className="text-lg text-body">
                AI strategy and execution for companies - diagnosis first, then
                systems that deliver return. My agency with Raviv.
              </p>
            </div>

            <div className="pb-8 border-b border-line">
              <div className="flex flex-col items-center gap-4 mb-3">
                <span className="text-3xl">🎙️</span>
                <div>
                  <h3 className="text-2xl font-bold">
                    <a
                      href="https://thelastfounder.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60"
                    >
                      The-Last-Founder Podcast
                    </a>
                  </h3>
                  <p className="text-sm text-muted mt-1">Recording</p>
                </div>
              </div>
              <p className="text-lg text-body">
                Live experiments in building. Three founders build a startup in
                real-time on camera, no script, no editing.
              </p>
            </div>
          </div>

          <Link
            href="/lonoda"
            className="text-ink font-medium hover:opacity-60"
          >
            Explore all projects →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto border-t border-line" />
      </div>

      {/* CTA Section */}
      <section className="px-8 py-24 flex justify-center text-center">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl text-body mb-12">
            The fastest way to reach me is through my agent.
          </p>
          <Link href="/agent" className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition">
              Talk to my agent
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
