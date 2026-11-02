const steps = [
  {
    title: "What you bring",
    body: "one concrete question, in one line.",
  },
  {
    title: "What I'll ask",
    body: "what you've tried, what's at stake, what would change your mind.",
  },
  {
    title: "What you leave with",
    body: "an honest read and one next step, or a clear 'not with me'.",
  },
];

/** The 45-minute working session, as three parts. */
export function SessionSteps() {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-fog">
        45-minute working session
      </p>
      <ol className="list-none grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="bg-night-card border border-night-line rounded-[20px] p-6 flex flex-col gap-3"
          >
            <span className="font-mono text-[13px] text-lime">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display font-semibold text-[22px] leading-[1.2]">
              {step.title}
            </h3>
            <p className="text-base text-bone-2">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
