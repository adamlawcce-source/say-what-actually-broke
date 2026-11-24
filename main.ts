import { mkdirSync, writeFileSync } from "node:fs";

// One line of software error copy, at most 200 characters, that tells the
// user the brutal truth about the failure and makes them laugh: the server
// ran out of memory mid-request. It names the real failure in plain words,
// says what to do next (wait a minute, try again), and the joke is a single
// image a reader repeats out loud.
const TEXT =
  "The server ran out of memory and died holding your request. Give it a minute to catch its breath, then try again — it feels worse than you do.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
