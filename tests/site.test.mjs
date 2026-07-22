import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routes = ["index", "fiction/index", "journal/index", "about/index", "contact/index"];

async function readRoute(route) {
  return readFile(new URL(`../dist/${route}.html`, import.meta.url), "utf8");
}

test("all primary routes build with navigation and the author name", async () => {
  for (const route of routes) {
    const html = await readRoute(route);
    assert.match(html, /John Will Dye/);
    assert.match(html, /Browse fiction|Fiction/);
    assert.match(html, /Journal/);
    assert.match(html, /About/);
    assert.match(html, /Contact/);
  }
});

test("the home page contains the original hero artwork and explicit placeholder copy", async () => {
  const html = await readRoute("index");
  assert.match(html, /hero-ascent/);
  assert.match(html, /data-placeholder="true"/);
  assert.match(html, /Concept artwork for this first draft/);
});

test("public output contains no embargoed publication language", async () => {
  for (const route of routes) {
    const html = await readRoute(route);
    const embargoedTitle = ["Memorable", "Morpheme"].join(" ");
    const acceptanceClaim = ["accepted", "for", "publication"].join(" ");
    const prematureStatus = ["forth", "coming"].join("");

    assert.doesNotMatch(html, new RegExp(embargoedTitle, "i"));
    assert.doesNotMatch(html, new RegExp(acceptanceClaim, "i"));
    assert.doesNotMatch(html, new RegExp(prematureStatus, "i"));
  }
});

test("public profiles are present on the contact page", async () => {
  const html = await readRoute("contact/index");
  assert.match(html, /goodreads\.com/);
  assert.match(html, /x\.com\/johndyewrites/);
  assert.match(html, /facebook\.com\/john\.dye\.572064/);
});
