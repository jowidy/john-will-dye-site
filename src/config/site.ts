export const site = {
  name: "John Will Dye",
  description: "Official website of fiction writer John Will Dye.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Fiction", href: "/fiction/" },
    { label: "Journal", href: "/journal/" },
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
    homeLede: "HOMEPAGE INTRODUCTION — JOHN TO WRITE",
    fictionIntro: "FICTION INTRODUCTION — JOHN TO WRITE",
    journalIntro: "JOURNAL INTRODUCTION — JOHN TO WRITE",
    aboutShort: "SHORT AUTHOR INTRODUCTION — JOHN TO WRITE",
    aboutLong: "AUTHOR BIOGRAPHY — JOHN TO WRITE OR APPROVE",
    contactIntro: "CONTACT INTRODUCTION — JOHN TO WRITE",
    directContact: "CONTACT ADDRESS OR FORM — JOHN TO PROVIDE",
  },
} as const;
