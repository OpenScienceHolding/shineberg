import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Page source for each static sitemap URL. Home is "". */
export const PAGE_SOURCE: Record<string, string> = {
  "": "app/page.tsx",
  "/how-to-work": "app/how-to-work/page.tsx",
  "/strategy": "app/strategy/page.tsx",
  "/agent": "app/agent/page.tsx",
  "/guide": "app/guide/page.tsx",
  "/about": "app/about/page.tsx",
  "/lonoda": "app/lonoda/page.tsx",
  "/blog": "app/blog/page.tsx",
  "/book": "app/book/page.tsx",
};

export const GUIDE_SOURCE = PAGE_SOURCE["/guide"];

function dayFromIso(iso: string): string | undefined {
  const day = iso.slice(0, 10);
  return DAY_RE.test(day) ? day : undefined;
}

function projectFile(file: string): string {
  return path.join(/*turbopackIgnore: true*/ process.cwd(), file);
}

/**
 * Committer calendar date of a file, from git. "first" is the commit that
 * added the file. "last" is the newest commit that touched it.
 */
export function gitCommitDay(
  file: string,
  which: "first" | "last",
): string | undefined {
  const args =
    which === "last"
      ? ["log", "-1", "--format=%cI", "--", file]
      : ["log", "--follow", "--diff-filter=A", "-1", "--format=%cI", "--", file];
  try {
    const out = execFileSync("git", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out ? dayFromIso(out) : undefined;
  } catch {
    return undefined;
  }
}

/** Filesystem mtime, used only when git cannot name a commit. */
export function fileMtimeDay(file: string): string | undefined {
  try {
      const mtime = fs.statSync(projectFile(file)).mtime;
    return dayFromIso(mtime.toISOString());
  } catch {
    return undefined;
  }
}

/** Last-commit day, then file mtime, then the build clock. Never a made-up day. */
export function sourceLastModifiedDay(file: string): string {
  return (
    gitCommitDay(file, "last") ??
    fileMtimeDay(file) ??
    new Date().toISOString().slice(0, 10)
  );
}

export function dayToDate(day: string): Date {
  return new Date(`${day}T00:00:00.000Z`);
}

export function formatContentDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

/** Guide has no frontmatter. Published is when the file was added; updated is the last commit. */
export function guideContentDates(): { published: string; updated: string } {
  const updated = sourceLastModifiedDay(GUIDE_SOURCE);
  const published = gitCommitDay(GUIDE_SOURCE, "first") ?? updated;
  return { published, updated };
}
