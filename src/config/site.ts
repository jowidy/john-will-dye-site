export const site = {
  name: "John Will Dye",
  description: "Science fiction, fantasy, and horror by John Will Dye.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Fiction", href: "/fiction/" },
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  socials: [
    {
      label: "Goodreads",
      href: "https://www.goodreads.com/author/show/7546503.John_William_Dye",
    },
    { label: "X", href: "https://x.com/johndyewrites" },
    { label: "Facebook", href: "https://www.facebook.com/john.dye.572064" },
  ],
  copy: {
    homeLede: "You're going places. You might not come back the same person.",
    fictionIntro:
      "Airships, monsters, strange gods, dangerous words. People far from home, finding out what they can do when turning back is no longer an option.",
    blogIntro:
      "New fiction, work-in-progress notes, publication news, events, and special editions. Subscribe if you want to know when something new is ready.",
    aboutShort: "I write science fiction, fantasy, horror, and stories closer to home.",
    aboutLong: [
      "My characters stand unarmed against armies, hold falling airships together, face the creatures inside them, and build new homes after the old ones are gone.",
      "My short fiction includes \"Polacca\" and \"A Memorable Morpheme.\"",
    ],
    contactIntro:
      "For rights and professional inquiries, contact my agent. For stories, updates, and conversation, you can find me at the links below.",
  },
  substack: {
    url: "https://johnwilldye.substack.com/",
    feedUrl: "https://johnwilldye.substack.com/feed",
  },
  representation: {
    agent: "Evan J Gregory",
    agency: "Ethan Ellenberg Literary Agency",
    profileUrl: "https://www.ethanellenberg.com/agents/evan-gregory/",
    contactUrl: "https://www.ethanellenberg.com/contact/",
    email: "agent@ethanellenberg.com",
  },
} as const;
