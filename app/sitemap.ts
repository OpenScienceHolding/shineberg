import type { MetadataRoute } from "next";
import {
  dayToDate,
  PAGE_SOURCE,
  sourceLastModifiedDay,
} from "./lib/content-dates";
import { getPublishedPosts } from "./lib/posts";
import { SITE_URL } from "./lib/site";

// /weloveluka is intentionally excluded (noindex).
const routes = [
  "",
  "/how-to-work",
  "/strategy",
  "/agent",
  "/guide",
  "/about",
  "/lonoda",
  "/blog",
  "/book",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((route) => {
    const file = PAGE_SOURCE[route];
    if (!file) {
      throw new Error(`Sitemap route ${route || "/"} has no source file`);
    }
    return {
      url: `${SITE_URL}${route}`,
      lastModified: dayToDate(sourceLastModifiedDay(file)),
    };
  });

  const posts = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    // Editorial dates only. `updated` when the post says it changed, else `date`.
    lastModified: dayToDate(post.updated ?? post.date),
  }));

  return [...pages, ...posts];
}
