import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildCanonicalUrl, siteMetadata } from "../src/lib/seo";
import { staticPageMeta } from "../src/lib/seo-pages";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const outputPath = path.join(publicDir, "sitemap.xml");

const nowIso = new Date().toISOString();

const defaultChangefreq = "monthly";

const ensureIso = (value?: string) => {
  if (!value) return nowIso;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? nowIso : date.toISOString();
};

type SitemapEntry = {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

const readSourceFile = async (relativePath: string) =>
  readFile(path.join(projectRoot, relativePath), "utf8");

const extractSlugs = async (relativePath: string) => {
  const source = await readSourceFile(relativePath);
  const matches = [...source.matchAll(/slug:\s*"([^"]+)"/g)];
  return matches.map((match) => match[1]);
};

const extractNewsEntries = async (relativePath: string) => {
  const source = await readSourceFile(relativePath);
  const pattern = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;
  const entries: { slug: string; date?: string }[] = [];
  for (const match of source.matchAll(pattern)) {
    entries.push({ slug: match[1], date: match[2] });
  }
  return entries;
};

const entries: SitemapEntry[] = [];

const addEntry = (entry: SitemapEntry) => {
  entries.push({
    changefreq: defaultChangefreq,
    priority: 0.7,
    ...entry,
  });
};

const main = async () => {
  // Static routes defined in seo-pages
  Object.values(staticPageMeta).forEach((meta) => {
    addEntry({
      loc: buildCanonicalUrl(meta.path),
      priority: meta.path === "/" ? 1 : 0.85,
      lastmod: nowIso,
    });
  });

  // Dynamic service detail pages
  const serviceSlugs = await extractSlugs("src/lib/services.ts");
  serviceSlugs.forEach((slug) => {
    addEntry({
      loc: buildCanonicalUrl(`/services/${slug}`),
      priority: 0.8,
      lastmod: nowIso,
    });
  });

  // Dynamic project detail pages
  const projectSlugs = await extractSlugs("src/lib/projects.ts");
  projectSlugs.forEach((slug) => {
    addEntry({
      loc: buildCanonicalUrl(`/works/${slug}`),
      priority: 0.75,
      lastmod: nowIso,
    });
  });

  // Dynamic news articles using article publication date
  const newsEntries = await extractNewsEntries("src/lib/news.ts");
  newsEntries.forEach((article) => {
    addEntry({
      loc: buildCanonicalUrl(`/news/${article.slug}`),
      changefreq: "weekly",
      priority: 0.8,
      lastmod: article.date,
    });
  });

  // Leadership profiles
  const teamSlugs = await extractSlugs("src/lib/team.ts");
  teamSlugs.forEach((slug) => {
    addEntry({
      loc: buildCanonicalUrl(`/about-us/our-team/${slug}`),
      priority: 0.6,
      lastmod: nowIso,
    });
  });

  const deduped = [
    ...new Map(entries.map((entry) => [entry.loc, entry])).values(),
  ].sort((a, b) => a.loc.localeCompare(b.loc));

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    deduped
      .map((entry) => {
        const priority =
          entry.priority !== undefined ? entry.priority.toFixed(2) : "0.70";
        return [
          "  <url>",
          `    <loc>${entry.loc}</loc>`,
          `    <lastmod>${ensureIso(entry.lastmod)}</lastmod>`,
          `    <changefreq>${entry.changefreq ?? defaultChangefreq}</changefreq>`,
          `    <priority>${priority}</priority>`,
          "  </url>",
        ].join("\n");
      })
      .join("\n") +
    "\n</urlset>\n";

  await writeFile(outputPath, xml, "utf8");

  console.log(`Sitemap generated with ${deduped.length} URLs at ${outputPath}`);
  console.log(`Submit to: ${siteMetadata.siteUrl}/sitemap.xml`);
};

await main();
