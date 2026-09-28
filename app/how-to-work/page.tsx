import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Work With Me | Sharon Shineberg",
  description:
    "How Sharon Shineberg communicates, decides and works - and the ways to work together: join a venture, build something new, or bring him into yours.",
};

const principles: { title: string; points: string[] }[] = [
  {
    title: "How I communicate",
    points: [
      "WhatsApp over email. Short messages; voice notes welcome - I send them too.",
      "Hebrew or English, whatever is natural for you.",
      "Say what you need, what the goal is, and what decision you are asking for. If something feels off or unclear, put it on the table.",
    ],
  },
  {
    title: "How I make decisions",
    points: [
      "Put one concrete, reviewable step in front of me and you get a fast yes or no.",
      "I verify before I commit, and I push back when something sounds generic. That is not friction - it is how we get to the real thing.",
      "Before I respond to anything that matters, I read the whole history. Context changes answers.",
    ],
  },
  {
    title: "Scope before work",
    points: [
      "Before I build anything, three things go on the table: a defined scope, a decision point, and clear terms.",
      "If the idea is yours, you hold the definition. Bring me a concrete proposal and I will react to it honestly; I am not the one to define your project for you.",
      "I protect my time from undefined work, and I will say so early rather than let it drag.",
    ],
  },
  {
    title: "Honesty over performance",
    points: [
      'If I do not know, I say "I don\'t know" - and we turn the gaps into a discovery plan instead of invented numbers.',
      "I would rather show you a rough truth than a polished guess.",
    ],
  },
  {
    title: "Mistakes and disagreements",
    points: [
      "We will not always agree. Say it directly, without drama, and I will do the same.",
      "If my work misses, tell me. Owning it fast keeps the momentum.",
    ],
  },
  {
    title: "Meetings",
    points: [
      "A clear message beats a meeting. If we meet, it is to decide something.",
      "Come with the purpose in one line.",
    ],
  },
  {
    title: "How I work day to day",
    points: [
      "I work openly with AI agents - my own setup connects Instinct to my knowledge system. You get drafts, research and summaries fast, and I personally review everything before it goes out under my name.",
      "I keep an audit trail of what my tools change. If we work together, you always know what came from where.",
    ],
  },
];

const linkClass = "underline hover:opacity-60";

export default function WorkWithMe() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      <Nav />

      <section className="px-8 py-24 flex justify-center">
        <div className="max-w-2xl w-full">
          <h1 className="text-6xl font-bold mb-8 text-center">Work With Me</h1>
          <p className="text-xl text-body text-center mb-20 leading-relaxed">
            <strong className="text-ink">TLDR:</strong> I&apos;m an advisor and
            companion to ventures from day one. Direct talk, defined scope, real
            partnership. I move fast when the plan is concrete.
          </p>

          <div className="space-y-14 mb-20">
            {principles.map((p) => (
              <div key={p.title}>
                <h2 className="text-3xl font-bold mb-4">{p.title}</h2>
                <ul className="text-lg text-body space-y-2 list-disc">
                  {p.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-line pt-16 mb-20">
            <h2 className="text-4xl font-bold mb-10">
              Ways we can work together
            </h2>

            <div className="mb-12 pb-8 border-b border-line">
              <h3 className="text-2xl font-bold mb-3">
                1. Join one of my ventures
              </h3>
              <p className="text-lg text-body">
                I&apos;m building companies that create real impact: autonomous
                customer acquisition, educational AI, and more. If you want to
                join{" "}
                <a
                  href="https://reeftrh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Reef TRH
                </a>
                ,{" "}
                <a
                  href="https://thelastfounder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  The-Last-Founder Podcast
                </a>
                , or{" "}
                <Link href="/lonoda" className={linkClass}>
                  unschool.live
                </Link>
                , let&apos;s talk about equity, roles, and what you want to
                build.
              </p>
            </div>

            <div className="mb-12 pb-8 border-b border-line">
              <h3 className="text-2xl font-bold mb-3">
                2. Build something new together
              </h3>
              <p className="text-lg text-body">
                You have an idea, I have experience. Works best if you&apos;re a
                founder, team, or operator ready to move fast - strategy, system
                design, go-to-market, and execution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                3. I join your venture
              </h3>
              <p className="text-lg text-body">
                As advisor, consultant, or part-time strategic lead - from a
                single deep meeting on one specific question, through a
                multi-month engagement, to a long-term partnership (equity,
                advisory, or a combination). New startups, startups in
                transition, or companies facing AI disruption and market shifts.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Terms</h2>
            <p className="text-lg text-body">
              No fixed pricing - it depends on scope, stage, equity, and depth
              of engagement. What is fixed: every engagement starts with a
              defined scope, a decision point, and clear terms on the table.
              Tell me what you&apos;re building and what you need, and
              we&apos;ll structure it together.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">
              If you need AI systems built
            </h2>
            <p className="text-lg text-body">
              For companies that want AI strategy and execution - diagnosis
              first, then systems that deliver return - that&apos;s my agency
              with Raviv:{" "}
              <a
                href="https://reeftrh.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Reef TRH
              </a>
              .
            </p>
          </div>

          <div className="border-t border-line pt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-lg text-body mb-2">Fastest: WhatsApp.</p>
            <p className="text-lg text-body mb-10">
              Formal:{" "}
              <a href="mailto:sharon@shineberg.com" className={linkClass}>
                sharon@shineberg.com
              </a>
            </p>
            <Link
              href="/agent"
              className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
            >
              Talk to my agent
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
