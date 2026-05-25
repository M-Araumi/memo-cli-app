import type { State, Command } from "../types.js";

import { addCommand } from "../commands/addCommand.js";
import { updateCommand } from "../commands/updateCommand.js";
import { deleteCommand } from "../commands/deleteCommand.js";
import { displayCommand } from "../commands/displayCommand.js";
import { searchCommand } from "../commands/searchMemo.js";
import { statsCommand } from "../commands/statsCommand.js";

export function executeCommand(state:State,cmd:Command):State {
    switch(cmd.type){
        case "add":
            return addCommand(state,cmd.input);
        case "display":
            displayCommand(state.memos)
            return state;
        case "update":
            return updateCommand(state,cmd.input);
        case "del":
            return deleteCommand(state,cmd.input);
        case "search":
            searchCommand(state.memos,cmd.input);
            return state;
        case "stats":
            statsCommand(state);
            return state;
    };
};
