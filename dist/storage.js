import { readFile, writeFile } from "fs/promises";
const FILE_PATH = "./memos.json";
export async function loadState() {
    try {
        const data = await readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    }
    catch {
        return { memos: [], nextId: 1 };
    }
}
export async function saveState(state) {
    await writeFile(FILE_PATH, JSON.stringify(state, null, 2));
}
//# sourceMappingURL=storage.js.map