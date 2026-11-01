import { NightShell } from "../components/NightShell";
import { TrackedLink } from "../components/TrackedLink";

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
    <NightShell current="/lonoda">
      <section className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="max-w-[760px]">
          <h1 className="font-display font-extrabold text-[clamp(48px,6vw,76px)] leading-[0.98] tracking-[-0.03em] mb-6">
            lonoda
          </h1>
          <p className="text-xl text-bone-2 mb-16 leading-relaxed">
            Places where you dive into the unknown. Projects where outcomes are
            uncertain, problems are real, and learning happens in public.
          </p>

          <div className="grid gap-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-night-card border border-night-line rounded-[20px] p-8 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl" aria-hidden="true">
                      {project.emoji}
                    </span>
                    <h3 className="font-display font-semibold text-[28px] leading-[1.15]">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-lime">
                    {project.status}
                  </p>
                </div>
                <p className="text-base text-bone-2">{project.description}</p>
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
                  className="text-bone font-medium border-b border-night-edge self-start hover:border-lime"
                >
                  Visit →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-8 border-t border-night-line">
            <h2 className="font-display font-semibold text-[32px] leading-[1.15] tracking-[-0.02em] mb-8">
              Stay Connected
            </h2>
            <div className="flex flex-wrap gap-8">
              <a
                href="https://www.linkedin.com/in/sharonshineberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone font-medium border-b border-night-edge hover:border-lime"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/shinebergsharon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone font-medium border-b border-night-edge hover:border-lime"
              >
                Facebook
              </a>
              <TrackedLink
                href="mailto:sharon@shineberg.com"
                className="text-bone font-medium border-b border-night-edge hover:border-lime"
                event="contact_click"
                params={{ method: "email", location: "lonoda" }}
              >
                Email
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </NightShell>
  );
}
