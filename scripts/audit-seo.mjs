import fs from "node:fs";
import path from "node:path";

// Run against the actual production output, not just source templates.
const root = path.resolve(".next/server/app");
const base = "https://izmircekicioto.com";
const errors = [];
const warnings = [];
const pages = new Map();
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (file.endsWith(".html") && !entry.name.startsWith("_")) {
      const relative = path.relative(root, file).replaceAll("\\", "/");
      const route = relative === "index.html" ? "/" : `/${relative.slice(0, -5)}`;
      pages.set(route, fs.readFileSync(file, "utf8"));
    }
  }
}
if (!fs.existsSync(path.resolve(".next/BUILD_ID"))) throw new Error("Complete npm run build before auditing.");
walk(root);
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml.body"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapRoutes = new Set(urls.map((url) => new URL(url).pathname));
if (new Set(urls).size !== urls.length) errors.push("Sitemap contains duplicate URLs");
const allLinks = new Map();
const titles = new Map();
let excludedNoindex = 0;
const schemaCounts = { Organization: 0, Service: 0, FAQPage: 0, LocalBusiness: 0 };
for (const [route, html] of pages) {
  const check = (condition, message) => { if (!condition) errors.push(`${route}: ${message}`); };
  for (const image of html.matchAll(/<img\b[^>]*>/gi)) check(/\balt="[^"]+"/i.test(image[0]), "Image has missing or empty alt text");
  const hasNoindex = /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html);
  if (!sitemapRoutes.has(route)) {
    check(hasNoindex, "Generated page is outside sitemap without noindex");
    if (hasNoindex) excludedNoindex++;
    continue;
  }
  check((html.match(/<h1(?:\s|>)/g) ?? []).length === 1, "Expected exactly one H1");
  check(html.includes('lang="tr"'), "Missing Turkish language");
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  check(canonical && new URL(canonical).pathname === route && new URL(canonical).origin === base, "Incorrect canonical");
  check(!hasNoindex, "Unexpected noindex");
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  check(Boolean(title), "Missing title");
  check(/<meta name="description" content="[^"]+"/.test(html), "Missing description");
  if (titles.has(title)) warnings.push(`Duplicate title: ${route} and ${titles.get(title)}`);
  titles.set(title, route);
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ");
  check(!/\\u[0-9a-f]{4}/i.test(visible), "Visible unicode escape");
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const schema = JSON.parse(json);
      for (const item of schema["@graph"] ?? [schema]) {
        if (item["@type"] in schemaCounts) schemaCounts[item["@type"]]++;
        if (item["@type"] === "FAQPage") for (const faq of item.mainEntity) {
          const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
          check(visible.includes(escape(faq.name)), `FAQ question absent from page: ${faq.name}`);
          check(visible.includes(escape(faq.acceptedAnswer.text)), "FAQ answer absent from page");
        }
        if (item["@type"] === "Organization") check(item["@id"] === `${base}/#organization`, "Inconsistent provider identity");
      }
    } catch (error) { errors.push(`${route}: invalid JSON-LD: ${error.message}`); }
  }
  const links = [...html.matchAll(/<a\b[^>]*href="(\/[^"?#]*)[^" ]*"/g)].map((match) => match[1]);
  allLinks.set(route, links);
  for (const link of links) if (!pages.has(link) && !link.startsWith("/_next/")) errors.push(`${route}: broken/redirecting internal link ${link}`);
}
for (const route of sitemapRoutes) if (!pages.has(route)) errors.push(`Sitemap URL has no generated page: ${route}`);
const reached = new Set(["/"]);
const queue = ["/"];
for (let i = 0; i < queue.length; i++) for (const link of allLinks.get(queue[i]) ?? []) if (!reached.has(link)) { reached.add(link); queue.push(link); }
for (const route of sitemapRoutes) if (!reached.has(route)) errors.push(`No crawlable path from homepage: ${route}`);
const report = { generatedAt: new Date().toISOString(), generatedPages: pages.size, sitemapUrls: urls.length, auditedPages: allLinks.size, excludedNoindex, reachablePages: [...sitemapRoutes].filter((r) => reached.has(r)).length, homepageBytes: Buffer.byteLength(pages.get("/") ?? ""), schemaCounts, errors: [...new Set(errors)], warnings: [...new Set(warnings)] };
fs.mkdirSync("artifacts", { recursive: true });
const regionsSource = fs.readFileSync("src/data/referenceRegions.ts", "utf8");
const detailSource = fs.readFileSync("src/data/districtDetails.ts", "utf8");
const detailedRegions = new Set([...detailSource.matchAll(/^  ([a-z0-9-]+): \{/gm)].map((match) => match[1]));
const referenceRegions = [...regionsSource.matchAll(/\{ slug: "([^"]+)", name: "([^"]+)" \}/g)].map(([, slug, name]) => ({ slug, name }));
const profiles = JSON.parse(fs.readFileSync("src/data/regionProfiles.json", "utf8"));
const profileMap = new Map(profiles.map((profile) => [profile.slug, profile]));
if (profiles.length !== referenceRegions.length || profileMap.size !== referenceRegions.length) report.errors.push("Region profiles must match the exact reference region set");
const contentCoverage = referenceRegions.map(({ slug, name }) => {
  const profile = profileMap.get(slug);
  if (!profile) report.errors.push(`Missing region profile: ${slug}`);
  else {
    if (profile.name !== name) report.errors.push(`Region name mismatch: ${slug}`);
    if (profile.status === "sourced" && profile.sources.length === 0) report.errors.push(`Sourced region without citation: ${slug}`);
    if (profile.status === "ambiguous" && profile.districts.length < 2) report.errors.push(`Ambiguous region without alternatives: ${slug}`);
  }
  return { slug, name, sourceStatus: profile?.status ?? "missing", sourceUrls: profile?.sources ?? [], hasLegacyDetail: detailedRegions.has(slug), operationEvidence: "Owner verification and photo mapping required" };
});
report.regions = {
  total: contentCoverage.length,
  sourced: contentCoverage.filter((region) => region.sourceStatus === "sourced").length,
  ambiguous: contentCoverage.filter((region) => region.sourceStatus === "ambiguous").length,
  pendingReview: contentCoverage.filter((region) => region.sourceStatus === "needs-review").length,
  verifiedOperations: 0,
};
fs.writeFileSync("artifacts/content-coverage.json", JSON.stringify(contentCoverage, null, 2));
fs.writeFileSync("artifacts/seo-audit.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (report.errors.length) process.exitCode = 1;
