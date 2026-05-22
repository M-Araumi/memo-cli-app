import type { UpdateMemo } from "../types.js";

type UpdateInputKey = keyof UpdateMemo["input"]

export const updateOptionMap: Record<string, UpdateInputKey> = {
    "--title": "title",
    "-t": "title",
    "--memoText": "memoText",
    "-m": "memoText",
    "--id": "id",
    "-i": "id"
}