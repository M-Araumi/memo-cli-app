import type { Memo } from "../types.js";

export function displayCommand(memos: Memo[]){
    for (const memo of memos) {
        const updateAT = new Date(memo.updatedDate).toISOString().slice(0, 10);
        console.log(`${memo.id}. タイトル：${memo.title} 本文：${memo.memoText} 更新日付：${updateAT}`);
    }
}
