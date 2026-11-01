import { TrackedLink } from "./TrackedLink";

export function NightFooter({
  copyright = "© 2026 Sharon Shineberg · Ramat Gan",
}: {
  copyright?: string;
}) {
  return (
    <footer className="border-t border-night-line">
      <div className="max-w-[1240px] mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-fog">
        <span>{copyright}</span>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://thelastfounder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone"
          >
            The Last Founder
          </a>
          <a
            href="https://www.linkedin.com/in/sharonshineberg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/shinebergsharon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone"
          >
            Facebook
          </a>
          <TrackedLink
            href="mailto:sharon@shineberg.com"
            className="hover:text-bone"
            event="contact_click"
            params={{ method: "email", location: "footer" }}
          >
            Email
          </TrackedLink>
        </div>
      </div>
    </footer>
  );
}

