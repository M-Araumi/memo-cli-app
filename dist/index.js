import { loadState, saveState } from "./storage.js";
import { addCommand } from "./commands/addCommand.js";
const argv = process.argv.slice(2);
const [command, ...rest] = argv;
let cmd;
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
        const options = parseOptions(rest);
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
        if (!rest[0]) {
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
let state = await loadState();
state = executeCommand(state, cmd);
await saveState(state);
function executeCommand(state, cmd) {
    switch (cmd.type) {
        case "add":
            return addCommand(state, cmd["input"]);
        // const newMemo: Memo = {
        //     createdDate: new Date(),
        //     id: state.nextId,
        //     title: cmd.input.title,
        //     memoText: cmd.input.memoText,
        //     updatedDate: new Date()
        // }
        // return{
        //     ...state,
        //     memos: [...state.memos, newMemo],
        //     nextId: state.nextId +1
        // };
        case "display":
            for (const memo of state.memos) {
                const updateAT = new Date(memo.updatedDate).toISOString().slice(0, 10);
                console.log(`${memo.id}. タイトル：${memo.title} 本文：${memo.memoText} 更新日付：${updateAT}`);
            }
            return state;
        case "update":
            return {
                ...state,
                memos: state.memos.map(memo => {
                    if (memo.id !== cmd.input.id) {
                        return memo;
                    }
                    return {
                        ...memo,
                        title: cmd.input.title ?? memo.title,
                        memoText: cmd.input.memoText ?? memo.memoText,
                        updatedDate: new Date()
                    };
                })
            };
        case "del":
            const searchId = state.memos.find(memo => memo.id === cmd.input.id);
            if (!searchId) {
                throw new Error("入力したIDのメモが見つかりません");
            }
            return {
                ...state,
                memos: state.memos.filter(memo => memo.id !== cmd.input.id)
            };
        case "search":
            let found = false;
            for (const memo of state.memos) {
                if (memo.title.includes(cmd.input.keyword) || memo.memoText.includes(cmd.input.keyword)) {
                    const updateAT = new Date(memo.updatedDate).toISOString().slice(0, 10);
                    found = true;
                    console.log(`${memo.id}. タイトル：${memo.title} 本文：${memo.memoText} 更新日付：${updateAT}`);
                }
            }
            if (!found) {
                console.log("検索対象が見つかりません");
            }
            return state;
    }
    ;
}
;
function validateUpdate(input) {
    if (input.id === undefined) {
        throw new Error("idは必須");
    }
    if (!input.title && !input.memoText) {
        throw new Error("更新内容がありません");
    }
}
;
function parseOptions(args) {
    const result = {};
    const optionMap = {
        "--title": "title",
        "-t": "title",
        "--memoText": "memoText",
        "-m": "memoText",
        "--id": "id",
        "-i": "id"
    };
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === undefined) {
            continue;
        }
        if (optionMap[arg]) {
            const key = optionMap[arg];
            const value = args[i + 1];
            if (!value || value.startsWith("-")) {
                throw new Error(`${arg} に値が指定されていません`);
            }
            result[key] = value;
            i++;
        }
        else {
            throw new Error(`不明なオプション: ${arg}`);
        }
    }
    return result;
}
;
//# sourceMappingURL=index.js.map