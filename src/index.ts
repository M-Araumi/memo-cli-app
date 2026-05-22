import { loadState, saveState } from "./storage.js";
import type { State } from "./types.js";
import { parseCommand } from "./utils/parseCommand.js";
import { executeCommand } from "./services/executeCommand.js";

const argv = process.argv.slice(2);

const cmd = parseCommand(argv)

let state: State = await loadState();

state = executeCommand(state, cmd);

await saveState(state);