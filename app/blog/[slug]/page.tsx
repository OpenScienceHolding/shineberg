import type { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
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
    <div className="min-h-screen bg-paper text-ink font-serif">
      <Nav />

      <article className="px-8 py-24 max-w-3xl mx-auto">
        <div className="mb-12">
          {post.category ? (
            <p className="text-sm uppercase tracking-wide text-muted mb-2">
              {post.category}
            </p>
          ) : null}
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-6 text-sm text-muted">
            <span>{formatPostDate(post.date)}</span>
            {post.link ? (
              <>
                <span>•</span>
                <span>
                  <a
                    href={post.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {post.link.label}
                  </a>
                </span>
              </>
            ) : null}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-body space-y-6">
          <MDXRemote
            source={post.content}
            components={postMdxComponents}
            options={{
              mdxOptions: { format: post.extension === "md" ? "md" : "mdx" },
            }}
          />
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
