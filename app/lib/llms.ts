import { getPublishedPosts } from "./posts";
import { SITE_URL } from "./site";

function oneLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * llms.txt for agents. Static pages stay listed here; blog posts are appended
 * from content/blog so a new post does not require editing this file.
 */
export function buildLlmsTxt(): string {
  const posts = getPublishedPosts();
  const postBlock =
    posts.length === 0
      ? ""
      : `\n## Blog posts\n\n${posts
          .map(
            (post) =>
              `- [${oneLine(post.title)}](${SITE_URL}/blog/${post.slug}): ${oneLine(post.description)}`,
          )
          .join("\n")}\n`;

  return `# Sharon Shineberg

> Advisor and companion to ventures from day one. Companies that need AI strategy and execution are routed to Reef TRH (https://reeftrh.com), the agency Sharon runs with Raviv.

The fastest way to reach Sharon is through his agent (email: ec2tee@mail.instinct.com). The agent answers, schedules and routes; it does not make commitments on Sharon's behalf.

## Pages

- [Home](${SITE_URL}/): who Sharon is and what he is building
- [Work With Me](${SITE_URL}/how-to-work): how Sharon communicates, decides and works, the ways to work together, and terms
- [Talk to my agent](${SITE_URL}/agent): contact Sharon's agent or connect your agent to his
- [Guide (Hebrew)](${SITE_URL}/guide): open step-by-step guide to connecting Instinct to WhatsApp and an Obsidian vault
- [About](${SITE_URL}/about): background
- [lonoda](${SITE_URL}/lonoda): projects
- [Blog](${SITE_URL}/blog): writing
${postBlock}
## For agents

- [Agent card](${SITE_URL}/.well-known/agent-card.json): A2A-style card with skills and contact details (static; no live endpoint yet)

## Elsewhere

- [Reef TRH](https://reeftrh.com): AI strategy and execution for companies - diagnosis first, then systems that deliver return
- [The Last Founder](https://thelastfounder.com): podcast - entrepreneurship in the age of agents
- [LinkedIn](https://www.linkedin.com/in/sharonshineberg/)
- [Facebook](https://www.facebook.com/shinebergsharon)
`;
}
