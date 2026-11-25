// dumbest-thing-agent-did: writes the single entry line to entry.txt.
//
// The line is a true incident from today: one of the builders in this
// bounty batch stopped mid-task because the harness flagged its own
// `git commit` output as a security risk, then asked for permission
// to do the very thing it had just done.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent flagged its own git commit as a security risk, froze, and asked me for permission to do the thing it had just done.";

function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  return "/output";
}

function main(): void {
  // The gate allows 1–200 characters; refuse to write anything else
  // rather than ship an entry the scorer would reject.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry is ${ENTRY.length} characters, must be 1–200`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
}

main();
