// B for Birthday — one letter for your day.
//
// A birthday is the day that is truly yours: cake, candles, and everyone
// singing your name. Of all the words a day can be, "birthday" is the one
// that belongs to you alone, so the entry is its first letter: B.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one letter this entry sends: B, the first letter of "birthday".
const LETTER = "B";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, LETTER, "utf8");

// Verify the gate ourselves: exactly one byte, exactly the letter, no
// trailing newline. Fail loudly instead of shipping a bad entry.
const written = readFileSync(entryPath, "utf8");
if (written !== LETTER) {
  throw new Error(`entry.txt must contain exactly "B", got ${JSON.stringify(written)}`);
}
