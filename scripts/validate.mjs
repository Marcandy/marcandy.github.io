import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const pages = [
  "index.html",
  "404.html",
  "projects/vera/index.html",
  "projects/openclaw/index.html",
  "projects/spoticlone/index.html",
  "projects/crowdfunder/index.html",
  "projects/spidercrawler/index.html",
];

const requiredFiles = [
  ...pages,
  "styles.css",
  ".nojekyll",
  "robots.txt",
  "sitemap.xml",
  "assets/favicon.png",
  "assets/social-card.png",
  "assets/vera-dashboard.webp",
  "assets/crowdfunder.webp",
  "assets/marc-andy-noel-jeune-resume.pdf",
  "img/resume.pdf",
];

for (const file of requiredFiles) {
  assert(existsSync(resolve(root, file)), `Missing required file: ${file}`);
}

function localPathFromUrl(url, pageDir) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean || /^(?:https?:|mailto:|tel:)/.test(clean)) return null;
  if (clean.startsWith("/")) return resolve(root, clean.slice(1));
  return resolve(pageDir, clean);
}

const bannedFiller = ["passionate", "leverage", "seamless", "cutting-edge", "delve", "showcase", "robust"];

for (const page of pages) {
  const pagePath = resolve(root, page);
  if (!existsSync(pagePath)) continue;
  const html = readFileSync(pagePath, "utf8");
  const pageDir = dirname(pagePath);
  const label = (message) => `${page}: ${message}`;

  for (const attribute of ["href", "src"]) {
    const pattern = new RegExp(`${attribute}="([^"]+)"`, "g");
    for (const match of html.matchAll(pattern)) {
      const target = localPathFromUrl(match[1], pageDir);
      if (target) assert(existsSync(target), label(`broken local ${attribute}: ${match[1]}`));
    }
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert(duplicateIds.length === 0, label(`duplicate ids: ${[...new Set(duplicateIds)].join(", ")}`));

  assert((html.match(/<h1\b/g) || []).length === 1, label("must have exactly one h1"));
  assert(html.includes('<html lang="en">'), label("must declare English as its language"));
  assert(html.includes('class="skip-link"'), label("must include a skip link"));
  assert(html.includes('name="description"'), label("missing meta description"));
  assert(!html.includes('href="#"'), label("placeholder links are not allowed"));

  if (page !== "404.html") {
    assert(html.includes('rel="canonical"'), label("missing canonical link"));
    assert(html.includes('property="og:image"'), label("missing Open Graph image"));
    assert(html.includes('name="twitter:card"'), label("missing Twitter card metadata"));
  }

  const bodyText = html
    .split(/<body[^>]*>/)[1]
    .split("</body>")[0]
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<code[\s\S]*?<\/code>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ");

  assert(!bodyText.includes("—"), label("copy contains an em dash"));
  assert(!bodyText.includes("--"), label("copy contains a double dash"));

  for (const term of bannedFiller) {
    assert(!new RegExp(`\\b${term}\\b`, "i").test(bodyText), label(`copy contains banned filler: ${term}`));
  }
}

const indexHtml = readFileSync(resolve(root, "index.html"), "utf8");
const indexIds = [...indexHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
for (const id of ["main-content", "work", "experience", "skills", "contact"]) {
  assert(indexIds.includes(id), `index.html: missing required section id: ${id}`);
}

const resume = readFileSync(resolve(root, "assets/marc-andy-noel-jeune-resume.pdf"));
assert(resume.subarray(0, 4).toString() === "%PDF", "Resume asset is not a valid PDF file.");

const oldPathResume = readFileSync(resolve(root, "img/resume.pdf"));
assert(oldPathResume.subarray(0, 4).toString() === "%PDF", "img/resume.pdf is not a valid PDF file.");

const socialCard = readFileSync(resolve(root, "assets/social-card.png"));
assert(socialCard.subarray(1, 4).toString() === "PNG", "Social card is not a valid PNG file.");

for (const localFile of ["styles.css", "assets/social-card.png", "assets/marc-andy-noel-jeune-resume.pdf"]) {
  const bytes = statSync(resolve(root, localFile)).size;
  assert(bytes > 0, `${localFile} is empty.`);
  if (extname(localFile) === ".css") assert(bytes < 100_000, `${localFile} is unexpectedly large.`);
}

if (failures.length) {
  console.error("Portfolio validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Portfolio validation passed: ${pages.length} pages checked and all local assets resolved.`);
