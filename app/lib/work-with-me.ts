import { SITE_URL } from "./site";

/** Same Person node the site already publishes. */
export const SHARON_ID = `${SITE_URL}/#sharon`;

export type Offer = {
  id: string;
  name: string;
  /** One line taken from the /how-to-work copy. No price. */
  description: string;
};

export const offers: Offer[] = [
  {
    id: "join-a-venture",
    name: "Join one of my ventures",
    description:
      "If you want to join Reef TRH, The-Last-Founder Podcast, or unschool.live, let's talk about equity, roles, and what you want to build.",
  },
  {
    id: "build-something-new",
    name: "Build something new together",
    description:
      "You have an idea, I have experience. Works best if you're a founder, team, or operator ready to move fast - strategy, system design, go-to-market, and execution.",
  },
  {
    id: "join-your-venture",
    name: "I join your venture",
    description:
      "As advisor, consultant, or part-time strategic lead - from a single deep meeting on one specific question, through a multi-month engagement, to a long-term partnership (equity, advisory, or a combination).",
  },
];

export type Situation = {
  quote: string;
  does: string;
  offerId: string;
};

/**
 * Visitor's words, then what Sharon does, then the way of working that fits.
 * "Join one of my ventures" is a real offer, but none of these situations are
 * about joining Reef TRH, the podcast, or unschool.live.
 */
export const situations: Situation[] = [
  {
    quote:
      "I have an idea and some experience, but I don't know what the concrete first step is.",
    does: "You have the idea. I put one concrete step on the table - scope, the decision, and how we build.",
    offerId: "build-something-new",
  },
  {
    quote:
      "The venture is moving, but nobody is holding the strategy and go-to-market.",
    does: "I join as advisor or part-time strategic lead and hold strategy and go-to-market with you.",
    offerId: "join-your-venture",
  },
  {
    quote:
      "I need someone to tell me honestly what's weak in the plan before I invest more.",
    does: "Bring the plan. One deep meeting, and I will tell you what's weak - a rough truth, not a polished guess.",
    offerId: "join-your-venture",
  },
];

export function offerById(id: string): Offer {
  const offer = offers.find((item) => item.id === id);
  if (!offer) throw new Error(`Unknown offer: ${id}`);
  return offer;
}

export const workWithMeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": SHARON_ID,
      name: "Sharon Shineberg",
      url: SITE_URL,
      jobTitle: "Advisor and companion to ventures from day one",
      sameAs: [
        "https://www.linkedin.com/in/sharonshineberg/",
        "https://www.facebook.com/shinebergsharon",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/how-to-work#service`,
      name: "Sharon Shineberg",
      url: `${SITE_URL}/how-to-work`,
      description:
        "Advisor and companion to ventures from day one. Direct talk, defined scope, real partnership. No fixed pricing - it depends on scope, stage, equity, and depth of engagement.",
      provider: { "@id": SHARON_ID },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ways we can work together",
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          description: offer.description,
          url: `${SITE_URL}/how-to-work#${offer.id}`,
        })),
      },
    },
  ],
};
