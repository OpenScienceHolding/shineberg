import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // /weloveluka stays crawlable so its noindex meta is honored.
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://shineberg.com/sitemap.xml",
  };
}
