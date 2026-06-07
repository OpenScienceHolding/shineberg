import Link from "next/link";

export default function Lonoda() {
  const projects = [
    {
      emoji: "🤖",
      title: "Agentic Agency",
      description:
        "Building autonomous systems that acquire customers through LinkedIn, WhatsApp, and partnerships.",
      status: "Active",
    },
    {
      emoji: "🎙️",
      title: "The-Last-Founder Podcast",
      description:
        "Live experiments in building. Three founders build a startup in real-time on camera, no script, no editing.",
      status: "Recording",
    },
    {
      emoji: "🎓",
      title: "unschool.live",
      description:
        "Personalized education through technology and community for self-directed learners.",
      status: "Planning",
    },
    {
      emoji: "🧠",
      title: "Workshop: Second Brain for Hyperactive Founders",
      description:
        "A system for managing chaos, building accountability, and creating structure in uncertain work.",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-ink">
        <Link href="/" className="text-sm font-semibold hover:opacity-60">
          Sharon Shineberg
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="/about" className="hover:opacity-60">
            About
          </Link>
          <Link href="/how-to-work" className="hover:opacity-60">
            How to Work
          </Link>
          <Link href="/lonoda" className="hover:opacity-60">
            lonoda
          </Link>
          <Link href="/blog" className="hover:opacity-60">
            Blog
          </Link>
        </div>
      </nav>

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">lonoda</h1>
        <p className="text-xl text-body mb-16">
          Places where you dive into the unknown. Projects where outcomes are
          uncertain, problems are real, and learning happens in public.
        </p>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="pb-8 border-b border-line last:border-b-0"
            >
              <div className="flex gap-4 mb-3">
                <span className="text-3xl">{project.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted mt-1">{project.status}</p>
                </div>
              </div>
              <p className="text-lg text-body ml-14">{project.description}</p>
              <Link
                href={`/lonoda/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-ink underline hover:opacity-60 ml-14 mt-3 inline-block"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
