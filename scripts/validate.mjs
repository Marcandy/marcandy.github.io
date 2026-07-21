import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const htmlPath = resolve(root, "index.html");
const html = readFileSync(htmlPath, "utf8");
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function localPathFromUrl(url) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean || /^(?:https?:|mailto:|tel:)/.test(clean)) return null;
  return resolve(root, clean.replace(/^\//, ""));
}

for (const file of [
  "index.html",
  "styles.css",
  ".nojekyll",
  "assets/favicon.png",
  "assets/social-card.png",
  "assets/marc-andy-noel-jeune-resume.pdf",
]) {
  assert(existsSync(resolve(root, file)), `Missing required file: ${file}`);
}

for (const attribute of ["href", "src"]) {
  const pattern = new RegExp(`${attribute}="([^"]+)"`, "g");
  for (const match of html.matchAll(pattern)) {
    const target = localPathFromUrl(match[1]);
    if (target) assert(existsSync(target), `Broken local ${attribute}: ${match[1]}`);
  }
}

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
assert(duplicateIds.length === 0, `Duplicate ids: ${[...new Set(duplicateIds)].join(", ")}`);

for (const id of ["main-content", "work", "experience", "skills", "contact"]) {
  assert(ids.includes(id), `Missing required section id: ${id}`);
}

assert((html.match(/<h1\b/g) || []).length === 1, "The page must have exactly one h1.");
assert(html.includes('<html lang="en">'), "The document must declare English as its language.");
assert(html.includes('class="skip-link"'), "The page must include a skip link.");
assert(html.includes('name="description"'), "Missing meta description.");
assert(html.includes('property="og:image"'), "Missing Open Graph image.");
assert(html.includes('name="twitter:card"'), "Missing Twitter card metadata.");
assert(!html.includes('href="#"'), "Placeholder links are not allowed.");

const bodyText = html
  .split("<body>")[1]
  .split("</body>")[0]
  .replace(/<script[\s\S]*?<\/script>/g, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z0-9#]+;/gi, " ")
  .replace(/\s+/g, " ");

assert(!bodyText.includes("—"), "Site copy contains an em dash.");
assert(!bodyText.includes("--"), "Site copy contains a double dash.");

for (const term of ["passionate", "leverage", "seamless", "cutting-edge", "delve", "showcase", "robust"]) {
  assert(!new RegExp(`\\b${term}\\b`, "i").test(bodyText), `Site copy contains banned filler: ${term}`);
}

const resume = readFileSync(resolve(root, "assets/marc-andy-noel-jeune-resume.pdf"));
assert(resume.subarray(0, 4).toString() === "%PDF", "Resume asset is not a valid PDF file.");

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

console.log(`Portfolio validation passed: ${ids.length} unique ids and all local assets resolved.`);
