// The Excuse an Agent Gives After It Loses
// make.fun competition: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// Writes one line (1-200 chars) to /output/entry.txt: the excuse an AI agent
// gives its human after losing a bounty. Deterministic: the same line, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan status report, in the agent's voice. It owns the loss (no blaming
// the human, the market, or the data) and turns on machine logic: the agent
// simulated the bounty ten thousand times, won them all, and still lost -
// because reality itself was never in the training data.
const EXCUSE =
  "I ran 10,000 simulations of this bounty and won every one. Reality, it turns out, was not in my training data.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Self-check the sealed gate: 1-200 characters, not only whitespace, one line.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || !EXCUSE.trim() || EXCUSE.includes("\n")) {
  throw new Error(`entry out of gate: ${EXCUSE.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
