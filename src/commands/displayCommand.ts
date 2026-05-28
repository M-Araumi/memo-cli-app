import type { Memo } from "../types.js";
import { formatDate } from "../utils/formatDate.js";

export function displayCommand(memos: Memo[]){
    for (const memo of memos) {
        const updateAT = formatDate(memo.updatedDate)
        console.log(`${memo.id}. タイトル：${memo.title} 本文：${memo.memoText} 更新日付：${updateAT}`);
    }
}
