import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      slug: "lezel-cannabis-ai",
      title: "lezel: From Cannabis Research to AI-Powered Personalization",
      excerpt:
        "In 2019, I was asked to research cannabis. What I discovered became a 6-year journey into building a company that uses AI to help people personalize their own use.",
      date: "June 2026",
      category: "Projects",
    },
    {
      slug: "agentic-agency-journey",
      title: "Building an Agentic Agency: Lessons from 13 Autonomous Agents",
      excerpt:
        "How we built a system of autonomous agents that handle customer acquisition, content creation, and analysis—without human intervention.",
      date: "Coming Soon",
      category: "Agentic Agency",
    },
    {
      slug: "last-founder-podcast",
      title: "The-Last-Founder: Why We Build Live",
      excerpt:
        "Why watching founders make mistakes in real-time is more valuable than any polished case study.",
      date: "Coming Soon",
      category: "Podcast",
    },
  ];

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
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-body mb-16">
          Thoughts on building, innovation, agents, and the projects in lonoda.
        </p>

        <div className="space-y-12">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="pb-12 border-b border-line last:border-b-0"
            >
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wide text-muted">
                  {post.category}
                </span>
                <p className="text-xs text-muted mt-1">{post.date}</p>
              </div>
              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
              <p className="text-lg text-body mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-ink underline hover:opacity-60"
              >
                Read article →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
