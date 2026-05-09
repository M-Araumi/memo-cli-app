import { readFile, writeFile } from "fs/promises";
import type { State } from "./types.js";

const FILE_PATH = "./memos.json";

export async function loadState(): Promise<State> {
  try {
    const data = await readFile(FILE_PATH, "utf-8");
    return JSON.parse(data) as State;
  } catch {
    return { memos: [], nextId: 1 };
  }
}

export async function saveState(state: State): Promise<void> {
  await writeFile(FILE_PATH, JSON.stringify(state, null, 2));
}