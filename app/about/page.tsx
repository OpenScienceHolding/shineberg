import Link from "next/link";

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

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">About</h1>

        <div className="space-y-8 text-lg text-body">
          <p>
            I'm an entrepreneur and innovation analyst obsessed with building
            systems that solve real human problems using AI.
          </p>

          <p>
            Over the past decade, I've founded companies, advised startups,
            built autonomous agent systems, and explored markets from cannabis
            to personal education. What connects all of it: finding signals in
            noise and building when others see only uncertainty.
          </p>

          <p>
            I believe the best breakthroughs happen at the edge of what's
            unknown. That's why I call my portfolio "lonoda"—a place where you
            dive into the unknown without knowing what you'll discover.
          </p>

          <p>
            Currently, I'm building an <strong>agentic agency</strong> that
            helps companies acquire customers through autonomous systems,
            running <strong>The-Last-Founder Podcast</strong> about building in
            real-time, and exploring how AI can personalize education with{" "}
            <strong>unschool.live</strong>.
          </p>

          <p>
            I work best with people who are comfortable with ambiguity, curious
            about what's possible, and ready to move fast.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-line">
          <Link
            href="/how-to-work"
            className="text-ink underline hover:opacity-60"
          >
            → How to work with me
          </Link>
        </div>
      </section>
    </div>
  );
}
