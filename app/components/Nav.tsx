import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center gap-4 px-6 md:px-8 py-6 border-b border-ink">
      <Link href="/" className="text-sm font-semibold hover:opacity-60">
        Sharon Shineberg
      </Link>
      <div className="flex flex-wrap justify-end gap-x-4 gap-y-1 md:gap-8 text-sm whitespace-nowrap">
        <Link href="/about" className="hover:opacity-60">
          About
        </Link>
        <Link href="/how-to-work" className="hover:opacity-60">
          Work With Me
        </Link>
        <Link href="/lonoda" className="hover:opacity-60">
          lonoda
        </Link>
        <Link href="/blog" className="hover:opacity-60">
          Blog
        </Link>
      </div>
    </nav>
  );
}
