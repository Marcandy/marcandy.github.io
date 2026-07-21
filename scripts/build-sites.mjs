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

for (const file of ["index.html", "styles.css", ".nojekyll"]) {
  cpSync(resolve(root, file), resolve(client, file));
}
cpSync(resolve(root, "assets"), resolve(client, "assets"), { recursive: true });

const worker = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") url.pathname = "/index.html";

    const response = await env.ASSETS.fetch(new Request(url, request));
    if (response.status !== 404) return response;

    return new Response("Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
`;

writeFileSync(resolve(server, "index.js"), worker, "utf8");
console.log("Sites build created dist/server/index.js and static client assets.");
