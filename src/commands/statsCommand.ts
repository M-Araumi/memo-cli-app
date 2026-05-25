import { statsMemoService } from "../services/serviceStats.js";
import type { State,StatsMemo } from "../types.js";

export function statsCommand(state: State){
    const stats = statsMemoService(state);
    console.log(" ******** 集計結果 ********")
    console.log(" メモ総数：",stats.totalCount,"件")
    console.log(" 今日更新したメモ数：",stats.averageWordCount,"件")
    console.log(" 平均文字数：",stats.averageWordCount,"個")
}