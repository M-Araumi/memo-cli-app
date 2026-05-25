import type { Command } from "../types.js";
import { parseOptions } from "./parseOptions.js";
import { validateUpdate } from "../validators/validateUpdate.js";
import { updateOptionMap } from "../constants/optionMaps.js";

export function parseCommand(argv: string[]): Command {
    const [command, ...rest] = argv;
    
    switch (command) {
        case "add":
            if (!rest[0] || !rest[1]) {
                throw new Error("titleとmemoTextなし");
            }
            return {
                type: "add",
                input: {
                    title: rest[0],
                    memoText: rest[1]
                }
            };
        case "display":
            return {
                type: "display"
            };
        case "update":
            const options = parseOptions(rest, updateOptionMap);
            validateUpdate(options);
            return {
                type: "update",
                input: {
                      id: Number(options.id),
                      ...(options.title !== undefined && { title: options.title }),
                      ...(options.memoText !== undefined && { memoText: options.memoText })
                }
            };
        case "del":
            if (!rest[0]) {
                throw new Error("削除するメモのIDを入力してください");
            }
            return {
                type: "del",
                input: {
                    id: Number(rest[0])
                }
            };
        case "search":
            if (!rest[0]){
                throw new Error("検索するキーワードを入力してください");
            }
            return {
                type: "search",
                input: {
                    keyword: rest[0]
                }
            };
        case "stats":
            return{
                type : "stats"
            }
        default:
            throw new Error("不正コマンド");
    }
}