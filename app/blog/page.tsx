import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { NightShell } from "../components/NightShell";
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
    <NightShell current="/blog">
      <section className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="max-w-[820px]">
        <h1 className="font-display font-extrabold text-[clamp(48px,6vw,76px)] leading-[0.98] tracking-[-0.03em] mb-4">
          Blog
        </h1>
        <p className="text-lg text-bone-2 mb-16">
          Thoughts on building, innovation, agents, and the projects in lonoda.
        </p>

        <div className="flex flex-col gap-4">
          {cards.map((post) => (
            <article
              key={post.href}
              className="bg-night-card border border-night-line rounded-[20px] p-8 flex flex-col gap-3"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {post.category ? (
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-lime">
                    {post.category}
                  </span>
                ) : null}
                <p className="font-mono text-xs text-fog">{post.date}</p>
              </div>
              <h2
                dir="auto"
                className="font-display font-semibold text-[28px] leading-[1.15] tracking-[-0.02em]"
              >
                {post.title}
              </h2>
              <p className="text-base text-bone-2">{post.excerpt}</p>
              <Link
                href={post.href}
                className="text-bone font-medium border-b border-night-edge self-start hover:border-lime"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
        </div>
      </section>
    </NightShell>
  );
}
