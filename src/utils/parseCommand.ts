import type { Command } from "../types.js";
import { parseOptions } from "./parseOptions.js";
import { validateAdd } from "../validators/validateAdd.js";
import { validateUpdate } from "../validators/validateUpdate.js";
import { validateDelete } from "../validators/validateDelete.js";
import { validateSearch } from "../validators/valiSearch.js";
import { updateOptionMap } from "../constants/optionMaps.js";

export function parseCommand(argv: string[]): Command {
    const [command, ...rest] = argv;
    
    switch (command) {
        case "add":
            const addInput = {
                title: rest[0],
                memoText: rest[1]
            };
            validateAdd(addInput);
            return {
                type: "add",
                input: {
                    title: addInput.title!,
                    memoText: addInput.memoText!
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
            const delInput = {
                id: Number(rest[0])
            };
            validateDelete(delInput)

            return {
                type: "del",
                input: {
                    id: delInput.id
                }
            };
        case "search":
            const searchInput = {
                keyword: rest[0]
            };
            validateSearch(searchInput)

            return {
                type: "search",
                input: {
                    keyword: searchInput.keyword!
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