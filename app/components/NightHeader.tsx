import Link from "next/link";
import { TrackedLink } from "./TrackedLink";

function agentLocation(current?: string) {
  if (current === "/strategy") return "strategy_nav";
  if (!current || current === "/") return "home_nav";
  return `${current.replace(/^\//, "").replaceAll("/", "_")}_nav`;
}

const links = [
  { href: "/about", label: "About" },
  { href: "/strategy", label: "Strategy" },
  { href: "/how-to-work", label: "Work with me" },
  { href: "/lonoda", label: "lonoda" },
  { href: "/blog", label: "Blog" },
  { href: "/book", label: "Book" },
];

export function NightHeader({ current }: { current?: string }) {
  return (
    <header className="border-b border-night-line">
      <nav
        aria-label="Main"
        className="max-w-[1240px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="font-display font-extrabold text-xl tracking-[-0.02em]"
        >
          shineberg<span className="text-lime">.</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px] text-fog">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                current === link.href ? "text-bone" : "hover:text-bone"
              }
              aria-current={current === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <TrackedLink
            href="/agent"
            className="inline-flex items-center gap-2 min-h-11 px-[18px] rounded-full border border-night-edge text-bone font-medium transition hover:border-fog"
            event="contact_click"
            params={{
              method: "agent_page",
              location: agentLocation(current),
            }}
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-lime"
            />
            Talk to my agent
          </TrackedLink>
        </div>
      </nav>
    </header>
  );
}
