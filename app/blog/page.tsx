import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { formatPostDate, getPublishedPosts } from "../lib/posts";
import { SITE_URL } from "../lib/site";

const blogTitle = "Blog | Sharon Shineberg";
const blogDescription =
  "Thoughts on building, innovation, agents, and the projects in lonoda.";

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMeta = await parent;
  return {
    title: blogTitle,
    description: blogDescription,
    openGraph: {
      title: blogTitle,
      description: blogDescription,
      url: `${SITE_URL}/blog`,
      images: parentMeta.openGraph?.images,
    },
    twitter: {
      card: "summary_large_image",
      title: blogTitle,
      description: blogDescription,
      images: parentMeta.twitter?.images,
    },
  };
}

export default function Blog() {
  const posts = getPublishedPosts().map((post) => ({
    href: `/blog/${post.slug}`,
    title: post.title,
    excerpt: post.description,
    date: formatPostDate(post.date),
    category: post.category,
  }));

  // Standalone page, not a blog post. Kept on the index so this card stays.
  const cards = [
    ...posts,
    {
      href: "/guide",
      title: "המדריך: איך לחבר את Instinct ל-WhatsApp ולכספת Obsidian",
      excerpt:
        "An open, step-by-step guide (in Hebrew) to connecting Instinct to WhatsApp, Apple Reminders and an Obsidian vault - and working alongside Claude. Prompts included.",
      date: "September 2026",
      category: "Guide",
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      <Nav />

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-body mb-16">
          Thoughts on building, innovation, agents, and the projects in lonoda.
        </p>

        <div className="space-y-12">
          {cards.map((post) => (
            <div
              key={post.href}
              className="pb-12 border-b border-line last:border-b-0"
            >
              <div className="mb-3">
                {post.category ? (
                  <span className="text-xs uppercase tracking-wide text-muted">
                    {post.category}
                  </span>
                ) : null}
                <p className="text-xs text-muted mt-1">{post.date}</p>
              </div>
              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
              <p className="text-lg text-body mb-4">{post.excerpt}</p>
              <Link
                href={post.href}
                className="text-ink underline hover:opacity-60"
              >
                Read article →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
