import Link from "next/link";
import Footer from "../components/Footer";

export default function Lonoda() {
  const projects = [
    {
      emoji: "🤖",
      title: "Reef TRH",
      description:
        "AI strategy and execution for companies - diagnosis first, then systems that deliver return. My agency with Raviv.",
      status: "Active",
      link: "https://reeftrh.com",
    },
    {
      emoji: "🎙️",
      title: "The-Last-Founder Podcast",
      description:
        "Live experiments in building. Three founders build a startup in real-time on camera, no script, no editing.",
      status: "Recording",
      link: "https://www.youtube.com/watch?v=Wygd-02oPSE&list=PLGhvOamix6K6b07eMUN3Ln0x2Ra8Nr5B2",
    },
    {
      emoji: "🧠",
      title: "lezel",
      description:
        "AI company exploring consciousness, intelligence, and the future of human-AI collaboration.",
      status: "Active",
      link: "https://lezel.co",
    },
    {
      emoji: "🎓",
      title: "unschool.live",
      description:
        "Personalized education through AI technology, empowering self-directed learners to build their own learning path.",
      status: "Building",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
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

      <section className="px-8 py-24 flex justify-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6 text-center">lonoda</h1>
          <p className="text-xl text-body mb-16 text-center leading-relaxed">
            Places where you dive into the unknown. Projects where outcomes are
            uncertain, problems are real, and learning happens in public.
          </p>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="pb-8 border-b border-line last:border-b-0"
              >
                <div className="flex flex-col items-center gap-4 mb-4">
                  <span className="text-4xl">{project.emoji}</span>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted mt-1">{project.status}</p>
                  </div>
                </div>
                <p className="text-lg text-body text-center mb-4">
                  {project.description}
                </p>
                <div className="text-center">
                  <a
                    href={project.link}
                    target={
                      project.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-ink font-medium hover:opacity-60"
                  >
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-20 pt-8 border-t border-line">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Stay Connected
            </h2>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/sharonshineberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium hover:opacity-60"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/shinebergsharon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium hover:opacity-60"
              >
                Facebook
              </a>
              <a
                href="mailto:sharon@shineberg.com"
                className="text-ink font-medium hover:opacity-60"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
