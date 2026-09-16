import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const databaseLine = readFileSync(".env", "utf8")
  .split(/\r?\n/)
  .find((line) => line.startsWith("DATABASE_URL="));

if (databaseLine === undefined) {
  throw new Error("DATABASE_URL est absent du fichier .env");
}

const rawUrl = databaseLine.slice("DATABASE_URL=".length).trim().replace(/^['"]|['"]$/g, "");
const databaseUrl = new URL(rawUrl);
databaseUrl.searchParams.set("connect_timeout", "30");
databaseUrl.searchParams.set("channel_binding", "disable");

const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";
execFileSync(npxCommand, ["prisma", "db", "push", ...process.argv.slice(2)], {
  stdio: "inherit",
  env: { ...process.env, DATABASE_URL: databaseUrl.toString() },
});