import type { Post } from "./posts";
import { SITE_URL } from "./site";
import { SHARON_ID } from "./work-with-me";

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Same Person node already published on /how-to-work. Profiles only. */
export const personJsonLd = {
  "@type": "Person",
  "@id": SHARON_ID,
  name: "Sharon Shineberg",
  url: SITE_URL,
  jobTitle: "Advisor and companion to ventures from day one",
  sameAs: [
    "https://www.linkedin.com/in/sharonshineberg/",
    "https://www.facebook.com/shinebergsharon",
  ],
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personJsonLd,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sharon Shineberg",
      description:
        "Advisor and companion to ventures from day one. Direct talk, defined scope, real partnership. For AI strategy and execution, see Reef TRH.",
      publisher: { "@id": SHARON_ID },
    },
  ],
};

export function postUrl(post: Post): string {
  return `${SITE_URL}/blog/${post.slug}`;
}

export function blogPostingJsonLd(post: Post) {
  const url = postUrl(post);
  const image = post.ogImage
    ? post.ogImage.startsWith("http")
      ? post.ogImage
      : new URL(post.ogImage, SITE_URL).href
    : undefined;

  return {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    url,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(image ? { image } : {}),
    author: { "@id": SHARON_ID },
  };
}

export function blogIndexJsonLd(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Blog",
    description:
      "Thoughts on building, innovation, agents, and the projects in lonoda.",
    publisher: { "@id": SHARON_ID },
    blogPost: posts.map(blogPostingJsonLd),
  };
}

export function blogPostPageJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@graph": [personJsonLd, blogPostingJsonLd(post)],
  };
}
