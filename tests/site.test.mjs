import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routes = ["index", "fiction/index", "blog/index", "about/index", "contact/index"];

async function readRoute(route) {
  return readFile(new URL(`../dist/${route}.html`, import.meta.url), "utf8");
}

test("all primary routes build with navigation and the author name", async () => {
  for (const route of routes) {
    const html = await readRoute(route);
    assert.match(html, /John Will Dye/);
    assert.match(html, /Browse fiction|Fiction/);
    assert.match(html, /Blog/);
    assert.doesNotMatch(html, /Journal/);
    assert.match(html, /About/);
    assert.match(html, /Contact/);
  }
});

test("the home page contains the original hero artwork and the finished site promise", async () => {
  const html = await readRoute("index");
  assert.match(html, /hero-ascent/);
  assert.match(html, /Set out curious\.<\/span><span[^>]*>Come back changed\./);
  assert.doesNotMatch(html, /They might not recognize you/);
});

test("public pages contain no provisional copy markers", async () => {
  for (const route of routes) {
    const html = await readRoute(route);
    assert.doesNotMatch(html, /data-placeholder="true"/);
    assert.doesNotMatch(html, /JOHN TO WRITE|JOHN TO PROVIDE|COPY TO BE WRITTEN|PLACEHOLDER/i);
  }
});

test("public output contains no embargoed publication language", async () => {
  for (const route of routes) {
    const html = await readRoute(route);
    const acceptanceClaim = ["accepted", "for", "publication"].join(" ");
    const prematureStatus = ["forth", "coming"].join("");

    assert.doesNotMatch(html, new RegExp(acceptanceClaim, "i"));
    assert.doesNotMatch(html, new RegExp(prematureStatus, "i"));
    assert.doesNotMatch(html, /Bombay Literary Magazine/i);
  }
});

test("the fiction shelf presents both story covers and the cleared public status", async () => {
  const html = await readRoute("fiction/index");

  assert.match(html, /Polacca/);
  assert.match(html, /polacca-cover/);
  assert.match(html, /Read the story/);
  assert.match(html, /Pif Magazine, Issue 215/);
  assert.doesNotMatch(html, /Issue 215\s*·\s*2015/);
  assert.match(html, /They stood in the beating sun, stumped/);
  assert.match(html, /best grilled cheese sandwich of your life/);
  assert.doesNotMatch(html, /asks for more than she wants to give/i);
  assert.match(html, /A Memorable Morpheme/);
  assert.match(html, /a-memorable-morpheme-cover/);
  assert.match(html, /Coming Soon/);
  assert.match(html, /story__cover-status[^>]*>Coming Soon/);
  assert.doesNotMatch(html, /story__status--soon/);
  assert.match(html, /Weird/);
  assert.match(html, /Horror/);
  assert.match(html, />YA</);
  assert.match(html, />Lit</);
  assert.doesNotMatch(html, /story__number/);
  assert.match(html, /What happens next is unforgettable/);
  assert.doesNotMatch(html, /photographs vanish|people begin to forget/i);
});

test("publication credits do not display dates", async () => {
  for (const route of ["index", "fiction/index", "fiction/polacca/index"]) {
    const html = await readRoute(route);
    assert.doesNotMatch(html, /·\s*2015\s*</);
  }
});

test("public profiles are present on the contact page", async () => {
  const html = await readRoute("contact/index");
  assert.match(html, /goodreads\.com/);
  assert.match(html, /x\.com\/johndyewrites/);
  assert.match(html, /facebook\.com\/john\.dye\.572064/);
  assert.match(html, /Evan J Gregory/);
  assert.match(html, /agent@ethanellenberg\.com/);
  assert.match(html, /ethanellenberg\.com\/contact/);
});

test("the blog handoff points to the live Substack", async () => {
  const home = await readRoute("index");
  const blog = await readRoute("blog/index");
  assert.match(home, /https:\/\/johnwilldye\.substack\.com\//);
  assert.match(blog, /https:\/\/johnwilldye\.substack\.com\//);
  assert.doesNotMatch(home, /SUBSTACK URL/);
  assert.doesNotMatch(blog, /SUBSTACK URL/);
});

test("the navigation remains legible while it sticks during scrolling", async () => {
  const header = await readFile(new URL("../src/components/SiteHeader.astro", import.meta.url), "utf8");
  const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

  assert.match(header, /data-site-header/);
  assert.match(header, /site-header--scrolled/);
  assert.match(header, /window\.scrollY > 12/);
  assert.match(styles, /\.site-header\s*{[^}]*position:\s*sticky/s);
  assert.match(styles, /\.site-header--hero\s*{[^}]*position:\s*fixed/s);
  assert.match(styles, /\.site-header--hero\.site-header--scrolled::after\s*{[^}]*opacity:\s*1/s);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});
