import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const server = resolve(dist, "server");

rmSync(dist, { recursive: true, force: true });
mkdirSync(client, { recursive: true });
mkdirSync(server, { recursive: true });

for (const file of ["index.html", "404.html", "styles.css", "robots.txt", "sitemap.xml", ".nojekyll"]) {
  cpSync(resolve(root, file), resolve(client, file));
}
for (const directory of ["assets", "projects", "img"]) {
  cpSync(resolve(root, directory), resolve(client, directory), { recursive: true });
}

const worker = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.endsWith("/")) url.pathname += "index.html";
    else if (new RegExp("^/projects/[^/.]+$").test(url.pathname)) url.pathname += "/index.html";

    const response = await env.ASSETS.fetch(new Request(url, request));
    if (response.status !== 404) return response;

    url.pathname = "/404.html";
    const notFound = await env.ASSETS.fetch(new Request(url, request));
    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    });
  },
};
`;

writeFileSync(resolve(server, "index.js"), worker, "utf8");
console.log("Sites build created dist/server/index.js and static client assets.");
