import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type PostStatus = "published" | "draft";

export type PostLink = {
  href: string;
  label: string;
};

export type Post = {
  title: string;
  description: string;
  /** Calendar date, YYYY-MM-DD. Shown as "Month YYYY". */
  date: string;
  slug: string;
  ogImage?: string;
  status: PostStatus;
  /** Optional label shown above the title. */
  category?: string;
  /** Optional link shown next to the date. */
  link?: PostLink;
  content: string;
  extension: "md" | "mdx";
};

function fail(file: string, message: string): never {
  throw new Error(`content/blog/${file}: ${message}`);
}

function requiredString(file: string, field: string, value: unknown): string {
  if (typeof value !== "string" || value.trim() === "") {
    fail(file, `"${field}" must be a non-empty string`);
  }
  return value.trim();
}

function optionalString(
  file: string,
  field: string,
  value: unknown,
): string | undefined {
  if (value == null || value === "") return undefined;
  if (typeof value !== "string") {
    fail(file, `"${field}" must be a string`);
  }
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function parseDate(file: string, value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const iso = value.toISOString().slice(0, 10);
    return parseDate(file, iso);
  }
  if (typeof value !== "string" || !DATE_RE.test(value)) {
    fail(file, `"date" must be YYYY-MM-DD`);
  }
  const [year, month, day] = value.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  if (
    utc.getUTCFullYear() !== year ||
    utc.getUTCMonth() !== month - 1 ||
    utc.getUTCDate() !== day
  ) {
    fail(file, `"date" is not a real calendar date`);
  }
  return value;
}

function parseLink(file: string, value: unknown): PostLink | undefined {
  if (value == null) return undefined;
  if (typeof value !== "object" || Array.isArray(value)) {
    fail(file, `"link" must be an object with "href" and "label"`);
  }
  const record = value as Record<string, unknown>;
  return {
    href: requiredString(file, "link.href", record.href),
    label: requiredString(file, "link.label", record.label),
  };
}

function parsePost(file: string): Post {
  const ext = path.extname(file);
  if (ext !== ".md" && ext !== ".mdx") {
    fail(file, "posts must be .md or .mdx files");
  }
  const slugFromFile = path.basename(file, ext);
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  const slug = requiredString(file, "slug", data.slug);
  if (!SLUG_RE.test(slug)) {
    fail(file, `"slug" must be lowercase words separated by hyphens`);
  }
  if (slug !== slugFromFile) {
    fail(
      file,
      `"slug" (${slug}) must match the filename (${slugFromFile})`,
    );
  }

  const status = data.status;
  if (status !== "published" && status !== "draft") {
    fail(file, `"status" must be "published" or "draft"`);
  }

  const body = content.trim();
  if (status === "published" && body === "") {
    fail(file, "published posts need a body");
  }

  return {
    title: requiredString(file, "title", data.title),
    description: requiredString(file, "description", data.description),
    date: parseDate(file, data.date),
    slug,
    ogImage: optionalString(file, "ogImage", data.ogImage),
    status,
    category: optionalString(file, "category", data.category),
    link: parseLink(file, data.link),
    content: body,
    extension: ext.slice(1) as "md" | "mdx",
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) {
    throw new Error("content/blog is missing");
  }
  const files = fs.readdirSync(POSTS_DIR).filter((file) => !file.startsWith("."));
  const posts = files.map(parsePost);
  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) {
      throw new Error(`Duplicate blog slug: ${post.slug}`);
    }
    seen.add(post.slug);
  }
  return posts;
}

export function getPublishedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => post.status === "published")
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      if (a.slug < b.slug) return -1;
      if (a.slug > b.slug) return 1;
      return 0;
    });
}

export function getPublishedPost(slug: string): Post | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export function formatPostDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
