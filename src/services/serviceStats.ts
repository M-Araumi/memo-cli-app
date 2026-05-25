import type { State,StatsMemo, StatsMemoCount } from "../types.js";

export function statsMemoService(state:State):StatsMemoCount {
    //メモの総数を集計
    const totalCount = state.memos.length;
    //今日編集したメモの総数を集計
    const today = new Date().toISOString().slice(0,10)
    const updateCount = state.memos.filter(memo =>
        new Date(memo.updatedDate).toISOString().slice(0,10) === today
    ).length
    //メモの文字数の平均値を集計
    const totalWordCount = state.memos.reduce(
    (sum, memo) => sum + memo.memoText.length,0);
    const averageWordCount = totalCount === 0 ? 0 : Math.floor(totalWordCount / totalCount);

    return {
        totalCount,
        updateCount,
        averageWordCount
    };
}