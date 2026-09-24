/**
 * Build-time internal link checker.
 *
 * Usage:  node scripts/check-links.mjs
 * Exits with code 1 if any internal href points to a non-existent page.
 *
 * What it checks:
 *  - Scans every .tsx file under app/ and components/ for href="..." patterns
 *  - Collects all internal hrefs (starting with /)
 *  - Cross-references against the actual page files in app/
 *  - Flags any href that has no matching page file
 *
 * What it skips (by design):
 *  - External URLs (https://, http://)
 *  - Anchor-only hrefs (#section)
 *  - Dynamic route hrefs that include template literals (${...})
 *  - API routes (/api/...)
 *  - Special paths (/sitemap.xml, /robots.txt, /apple-icon.png, /icon.png)
 *  - Hash-augmented paths (/pricing#section) — checks the base path only
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative } from "path";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, "app");
const SCAN_DIRS = [join(ROOT, "app"), join(ROOT, "components")];

// ---------- 1. Collect all real page paths from app/ ----------

function collectPages(dir, pages = new Set()) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      // Skip private/special Next.js dirs
      if (!entry.startsWith("_") && entry !== "api") {
        collectPages(full, pages);
      }
    } else if (entry === "page.tsx" || entry === "page.ts") {
      // Derive the URL path from the file path
      let urlPath = "/" + relative(APP_DIR, dir).replace(/\\/g, "/");
      if (urlPath === "/.") urlPath = "/";
      pages.add(urlPath === "/" ? "/" : urlPath.replace(/\/$/, ""));
    }
  }
  return pages;
}

const knownPages = collectPages(APP_DIR);
// Add special Next.js routes that are generated but don't have page.tsx
const SYNTHETIC = new Set([
  "/sitemap.xml",
  "/robots.txt",
  "/apple-icon.png",
  "/icon.png",
  "/not-found",
]);

// ---------- 2. Scan source files for internal hrefs ----------

const HREF_STATIC_RE = /href=["'](\/?[^"'#?{}\s]+)(?:[#?][^"']*)?["']/g;

function scanFile(filePath) {
  const src = readFileSync(filePath, "utf8");
  const hrefs = [];
  let m;
  while ((m = HREF_STATIC_RE.exec(src)) !== null) {
    const href = m[1];
    // Only internal paths, not external, not pure anchors, not template literals
    if (
      href.startsWith("/") &&
      !href.startsWith("//") &&
      !href.includes("${") &&
      !href.startsWith("/api/") &&
      href !== "/"
    ) {
      hrefs.push({ href, file: filePath });
    }
  }
  return hrefs;
}

function walkDir(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!entry.startsWith(".") && entry !== "node_modules") {
        walkDir(full, results);
      }
    } else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) {
      results.push(...scanFile(full));
    }
  }
  return results;
}

const allHrefs = [];
for (const dir of SCAN_DIRS) {
  allHrefs.push(...walkDir(dir));
}

// ---------- 3. Check each href against known pages ----------

const errors = [];
const seen = new Set();

for (const { href, file } of allHrefs) {
  // Strip trailing slash for comparison
  const normalized = href.replace(/\/$/, "") || "/";
  if (seen.has(normalized)) continue;
  seen.add(normalized);

  if (SYNTHETIC.has(normalized)) continue;
  if (normalized === "/") continue;

  // Check if a page.tsx exists for this path
  if (!knownPages.has(normalized)) {
    const rel = relative(ROOT, file).replace(/\\/g, "/");
    errors.push(`  MISSING  ${normalized}   (linked from ${rel})`);
  }
}

// ---------- 4. Report ----------

const pageCount = knownPages.size;
const hrefCount = seen.size;

console.log(`\n🔗 Link checker — ${pageCount} pages found, ${hrefCount} unique internal hrefs scanned\n`);

if (errors.length === 0) {
  console.log("✅ All internal links resolve to real pages.\n");
  process.exit(0);
} else {
  console.error(`❌ ${errors.length} broken internal link(s) found:\n`);
  for (const e of errors) console.error(e);
  console.error("\nFix these before deploying.\n");
  process.exit(1);
}
