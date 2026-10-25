/**
 * Booking config for /book. Meetings are served by Cal.com and embedded inline.
 * CAL_USERNAME and each slug must match the Cal.com account exactly, or the
 * embed shows Cal's 404. TODO: replace the placeholder once the account exists.
 */
export const CAL_USERNAME = "REPLACE-WITH-CAL-USERNAME";
export const CAL_ORIGIN = "https://app.cal.com";

export type MeetingType = {
  slug: string;
  name: string;
  minutes: number;
  description: string;
};

export const meetingTypes: MeetingType[] = [
  {
    slug: "intro",
    name: "Intro call",
    minutes: 20,
    description:
      "A short first conversation: who you are, what you are working on, and whether it makes sense to go further.",
  },
  {
    slug: "working-session",
    name: "Working session",
    minutes: 45,
    description:
      "A focused session on one concrete question - an opportunity, a venture, or a decision in front of you.",
  },
  {
    slug: "reef-scoping",
    name: "Reef TRH - diagnosis scoping call",
    minutes: 60,
    description:
      "For companies considering an AI diagnosis with Reef TRH: we map where you are and scope what a diagnosis would cover.",
  },
];

export const calLink = (slug: string) => `${CAL_USERNAME}/${slug}`;
