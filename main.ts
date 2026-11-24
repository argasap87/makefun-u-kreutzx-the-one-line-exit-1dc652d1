// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes one funny single-line resignation letter to /output/entry.txt.
// The line: a human cannonball resigns mid-flight and asks HR to forward
// his final paycheck to wherever he lands. Specific job, real letter voice,
// punchline pays off in the last few words. 87 characters, gate is 1-140.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I resign as your human cannonball; please forward my final paycheck to wherever I land.";

// Gate guard: the bounty only accepts a one-line entry of 1-140 chars.
// Validate before writing so a bad line never lands in /output/entry.txt.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`Entry line must be 1-140 characters, got ${LINE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length}-character entry to ${join(outDir, "entry.txt")}`);
