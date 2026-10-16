import type { MetadataRoute } from "next";
import { getPublishedPosts } from "./lib/posts";
import { SITE_URL } from "./lib/site";

// /weloveluka is intentionally excluded (noindex).
const routes = [
  "",
  "/how-to-work",
  "/agent",
  "/guide",
  "/about",
  "/lonoda",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().map((post) => `/blog/${post.slug}`);
  return [...routes, ...posts].map((route) => ({ url: `${SITE_URL}${route}` }));
}
