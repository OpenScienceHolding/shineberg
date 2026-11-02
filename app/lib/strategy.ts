import { SHARON_ID } from "./work-with-me";
import { SITE_URL } from "./site";

export const STRATEGY_PATH = "/strategy";
export const STRATEGY_URL = `${SITE_URL}${STRATEGY_PATH}`;

export const strategyTitle = "Strategy Consulting | Sharon Shineberg";
export const strategyDescription =
  "Strategy consulting for founders and executives facing a hard call. One concrete question, an honest read, and a decision on the table.";
export const strategyOgTitle =
  "Strategy consulting — a rough truth before you invest more";

export const audiences = [
  {
    title: "Founders",
    body: "with an idea and some experience, who don't yet know what the concrete first step is.",
  },
  {
    title: "Teams with traction",
    body: "where the venture is moving but nobody is holding the strategy and go-to-market.",
  },
  {
    title: "Senior executives",
    body: "whose company is facing AI disruption or a market shift, and who need to decide where to move first.",
  },
];

export const questions = [
  "Is this idea worth my next year?",
  "What's actually weak in this plan before I put more money in?",
  "We have traction. What do we focus on now - and what do we stop?",
  "Where does AI change our market, and where is it just noise?",
];

export const formats = [
  {
    title: "1. One deep session.",
    body: "A 45-minute working session on one concrete question. Come with the purpose in one line. You leave with an honest read and a next step.",
  },
  {
    title: "2. A defined engagement.",
    body: "When one session isn't enough: a multi-month engagement with a defined scope, a decision point and clear terms, in writing, before work starts.",
  },
  {
    title: "3. Ongoing advisor or part-time strategic lead.",
    body: "I hold strategy and go-to-market with you over time - advisory, equity, or a combination.",
  },
];

export const outcomes = [
  {
    title: "A rough truth, not a polished guess.",
    body: "If I don't know, I say so - and we turn the gaps into a discovery plan instead of invented numbers.",
  },
  {
    title: "A decision, not a report.",
    body: "Each engagement ends at a decision point you agreed on up front.",
  },
  {
    title: "Signals, early.",
    body: "17 years of spotting what's emerging before it's obvious - from market research in 2009 to agentic systems today.",
  },
  {
    title: "Strategy that can be built.",
    body: "I've founded and built ventures myself, so the plan has to survive execution.",
  },
  {
    title: "An opportunity map.",
    body: "A written map of the opportunities in front of you - where to move, where to wait, and what to drop.",
  },
];

export const faqs = [
  {
    question: "What does strategy consulting with you cost?",
    answer:
      "No fixed pricing - it depends on scope, stage, equity and depth. What's fixed: every engagement starts with a defined scope, a decision point and clear terms.",
  },
  {
    question: "How is this different from Reef TRH?",
    answer:
      "This is strategy: the hard call, the plan, the go-to-market. Reef TRH is AI strategy and execution for companies - diagnosis first, then systems built to deliver return.",
  },
  {
    question: "Can we start with a single meeting?",
    answer:
      "Yes. A 45-minute working session on one concrete question is the usual way in. If it makes sense to go further, we scope it together.",
  },
  {
    question: "Do you work in Hebrew or English?",
    answer: "Both - whatever is natural for you.",
  },
  {
    question: "Do you work for equity?",
    answer:
      "Sometimes, for longer partnerships - advisory, equity, or a combination. We put it on the table early.",
  },
];

export const strategyServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${STRATEGY_URL}#service`,
  name: "Strategy consulting",
  serviceType: "Strategy consulting",
  url: STRATEGY_URL,
  description: strategyDescription,
  provider: {
    "@type": "Person",
    "@id": SHARON_ID,
    name: "Sharon Shineberg",
    url: SITE_URL,
  },
};

export const strategyFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${STRATEGY_URL}#faq`,
  url: STRATEGY_URL,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export { jsonLdScript } from "./jsonld";
