export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-line">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-muted gap-8">
        <p>© 2026 Sharon Shineberg</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/sharonshineberg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/shinebergsharon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            Facebook
          </a>
          <a
            href="mailto:sharon@shineberg.com"
            className="hover:opacity-60 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
