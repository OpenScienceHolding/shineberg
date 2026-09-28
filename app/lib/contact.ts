export const AGENT_EMAIL = "ec2tee@mail.instinct.com";

export const TRUSTED_PEOPLE_URL =
  "https://invite.instinct.com/j/bkzovevyhdwkslz2iurb3vsuba";

const subject = "Hello from shineberg.com";
const body = [
  "Hi,",
  "",
  "Who I am:",
  "What I need:",
  "Best way to reach me (email / phone):",
  "",
].join("\n");

export const AGENT_MAILTO = `mailto:${AGENT_EMAIL}?subject=${encodeURIComponent(
  subject,
)}&body=${encodeURIComponent(body)}`;
