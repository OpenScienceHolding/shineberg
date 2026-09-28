import Link from "next/link";
import Footer from "../../components/Footer";

export default function LezelPost() {
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

      <article className="px-8 py-24 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-wide text-muted mb-2">
            Projects
          </p>
          <h1 className="text-5xl font-bold mb-4">
            lezel: From Cannabis Research to AI-Powered Personalization
          </h1>
          <div className="flex gap-6 text-sm text-muted">
            <span>June 2026</span>
            <span>•</span>
            <span>
              <a
                href="https://lezel.co"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                lezel.co
              </a>
            </span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-body space-y-6">
          <h2 className="text-2xl font-bold text-ink mt-12">
            The Discovery (2019)
          </h2>
          <p>
            In 2019, I was tasked at <strong>Blond</strong> to research the
            cannabis industry. As a project analyst, my job was simple: identify
            market opportunities.
          </p>
          <p>
            While researching, I discovered something fundamental:{" "}
            <strong>
              you cannot predict the effect of cannabis on a person.
            </strong>
          </p>
          <p>
            This wasn't a niche issue—it was the market's fundamental flaw. But
            the real bottleneck was deeper:{" "}
            <strong>people couldn't self-dose properly.</strong> This left
            enormous value on the table. Most consumers couldn't find what
            worked for them, so they either gave up or got lucky.
          </p>

          <h2 className="text-2xl font-bold text-ink mt-12">The Insight</h2>
          <p>
            The deeper I dug, the clearer it became: this problem was{" "}
            <strong>solvable through AI.</strong>
          </p>
          <p>I decided to leave Blond and build something new.</p>

          <h2 className="text-2xl font-bold text-ink mt-12">
            The Jump into Unknown
          </h2>
          <p>
            I knew nothing except: <em>there's a massive opportunity here.</em>
          </p>
          <p>So I taught myself everything:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The endocannabinoid system</li>
            <li>Cannabis research landscape</li>
            <li>Who the leading researchers were</li>
            <li>What knowledge existed (and what didn't)</li>
          </ul>

          <h2 className="text-2xl font-bold text-ink mt-12">
            6 Years of Building
          </h2>
          <p>
            Over six years, I developed <strong>lezel</strong>—a hardware
            company designed to help people personalize their cannabis use.
          </p>
          <p>
            <strong>The Product:</strong> Smart hardware that generates a
            dynamic cannabis protocol tailored to each individual.
          </p>
          <p>
            <strong>What We Did:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Raised capital</li>
            <li>Built a team</li>
            <li>Developed proprietary personalization technology</li>
            <li>Learned what works (and what doesn't) in a regulated market</li>
          </ul>

          <h2 className="text-2xl font-bold text-ink mt-12">
            What This Taught Me
          </h2>
          <p>lezel is the foundation of everything I do now:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>How to enter an unknown space</strong> without a map
            </li>
            <li>
              <strong>How to find signals in noise</strong> when data is
              incomplete
            </li>
            <li>
              <strong>How to build through uncertainty</strong> without perfect
              information
            </li>
            <li>
              <strong>How AI can solve real human problems</strong>—not just
              optimize existing ones
            </li>
          </ul>

          <p>
            lezel is still active. The company continues to explore
            personalization in regulated markets, and the lessons from building
            it inform every project I touch now.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-line">
          <Link href="/blog" className="text-ink underline hover:opacity-60">
            ← Back to Blog
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
