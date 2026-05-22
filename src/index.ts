import { loadState, saveState } from "./storage.js";
import type { State, Command } from "./types.js";
import { validateUpdate } from "./validators/validateUpdate.js";
import { parseOptions } from "./utils/parseOptions.js";
import { updateOptionMap } from "./constants/optionMaps.js";
import { executeCommand } from "./services/executeCommand.js";

const argv = process.argv.slice(2);
const [command, ...rest] = argv;
let cmd: Command;

switch (command) {
    case "add":
        if (!rest[0] || !rest[1]) {
            throw new Error("titleとmemoTextなし");
        }
        cmd = {
            type: "add",
            input: {
                title: rest[0],
                memoText: rest[1]
            }
        };
        break;
    case "display":
        cmd = {
            type: "display"
        };
        break;
    case "update":
        const options = parseOptions(rest, updateOptionMap);
        validateUpdate(options);
        cmd = {
            type: "update",
            input: {
                  id: Number(options.id),
                  ...(options.title !== undefined && { title: options.title }),
                  ...(options.memoText !== undefined && { memoText: options.memoText })
            }
        };
        break;
    case "del":
        if (!rest[0]) {
            throw new Error("削除するメモのIDを入力してください");
        }
        cmd = {
            type: "del",
            input: {
                id: Number(rest[0])
            }
        };
        break;
    case "search":
        if (!rest[0]){
            throw new Error("検索するキーワードを入力してください");
        }
        cmd = {
            type: "search",
            input: {
                keyword: rest[0]
            }
        };
        break;
    default:
        throw new Error("不正コマンド");
        break;
}

let state: State = await loadState();

state = executeCommand(state, cmd);

await saveState(state);
