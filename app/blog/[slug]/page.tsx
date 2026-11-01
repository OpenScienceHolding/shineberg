import type { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NightShell } from "../../components/NightShell";
import { postMdxComponents } from "../../lib/post-mdx";
import { formatPostDate, getPublishedPost, getPublishedPosts } from "../../lib/posts";
import { SITE_URL } from "../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return {};

  const parentMeta = await parent;
  const title = `${post.title} | Sharon Shineberg`;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const images = post.ogImage
    ? [{ url: post.ogImage }]
    : parentMeta.openGraph?.images;

  return {
    title,
    description: post.description,
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url,
      publishedTime: post.date,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : parentMeta.twitter?.images,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();

  return (
    <NightShell current="/blog">
      <article className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="max-w-[760px]">
        <div className="mb-12 flex flex-col gap-4">
          {post.category ? (
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-lime">
              {post.category}
            </p>
          ) : null}
          <h1 className="font-display font-extrabold text-[clamp(40px,5vw,64px)] leading-[1.02] tracking-[-0.03em]">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fog">
            <span>{formatPostDate(post.date)}</span>
            {post.link ? (
              <>
                <span>•</span>
                <span>
                  <a
                    href={post.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone underline decoration-night-edge underline-offset-4 hover:decoration-lime"
                  >
                    {post.link.label}
                  </a>
                </span>
              </>
            ) : null}
          </div>
        </div>

        <div className="night-copy text-[18px] leading-[1.75]">
          <MDXRemote
            source={post.content}
            components={postMdxComponents}
            options={{
              mdxOptions: { format: post.extension === "md" ? "md" : "mdx" },
            }}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-night-line">
          <Link
            href="/blog"
            className="text-bone font-medium border-b border-night-edge hover:border-lime"
          >
            ← Back to Blog
          </Link>
        </div>
        </div>
      </article>
    </NightShell>
  );
}
