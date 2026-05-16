import { displayCommand } from "./displayCommand.js";
import { searchMemoService } from "../services/serviceMemo.js";
import type { SearchMemo,Memo } from "../types.js";

export function searchCommand(memos: Memo[],input:SearchMemo["input"]){
    const searchResult = searchMemoService(memos,input);
    if(searchResult.length === 0){
        console.log("検索結果がありません");
    }else{
        displayCommand(searchResult);
    }
}