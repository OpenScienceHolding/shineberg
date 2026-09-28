import type { MetadataRoute } from "next";

const BASE = "https://shineberg.com";

// /weloveluka is intentionally excluded (noindex).
const routes = [
  "",
  "/how-to-work",
  "/agent",
  "/guide",
  "/about",
  "/lonoda",
  "/blog",
  "/blog/lezel-cannabis-ai",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${BASE}${route}` }));
}
