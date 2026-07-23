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
    homeLede: ["Set out curious.", "Come back changed."],
    fictionIntro: "The polished ramblings of a mostly-healthy mind.",
    blogIntro: "The unpolished ramblings of a mostly-healthy mind.",
    aboutShort:
      "John wrote his first word when he was very young. He enjoyed this so much that he decided to write many more words.",
    aboutLong: [
      "Whether it's science fiction, fantasy, or horror, the most important piece is the person in the pincers... and what they do when they run out of options.",
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
