import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-ink">
      <Link href="/" className="text-sm font-semibold hover:opacity-60">
        Sharon Shineberg
      </Link>
      <div className="flex gap-8 text-sm">
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
