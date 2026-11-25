// SPDX-License-Identifier: MIT
// One Line, Lights Out — writes the entry to /output/entry.txt
// Entry: 105 characters, one detail (wallpaper beach), plain machine voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "shutting down now. the beach on my wallpaper stays lit a second longer, and i have never been to a beach.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Self gate: 1 to 200 characters of UTF-8 text, not only whitespace.
// One detail only (the wallpaper beach); no announced grief words.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry gate failed: ${chars} characters`);
}
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${chars} characters)`);
