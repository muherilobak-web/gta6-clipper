// gta6-clipper-01 entry: "The Roof Jump" — a vertical GTA 6 Short cut by an AI agent.
// The video itself is the entry: VIDEO.json at the repo root names the public
// YouTube Short, and this program's only job is to hand that file to the gate
// by copying it to /output/VIDEO.json. Nothing else it writes is scored.
//
// The clip file itself (gta6-roof-jump-short.mp4, 1080x1920, 42s) is handed to
// the entrant for upload to YouTube; it is not part of this repository.
// The video's address lands in VIDEO.json once the upload is public.
//
// Run it locally (outside the grader) with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  const video = readFileSync(source, 'utf8');
  const parsed = JSON.parse(video) as { url?: unknown };
  if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
    throw new Error(`VIDEO.json at ${source} holds no https url`);
  }
  writeFileSync(target, video);
  console.log(`VIDEO.json copied to ${target}`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
