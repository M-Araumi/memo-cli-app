import { deleteMemoService } from "../services/serviceMemo.js";
import type { State,DeleteMemo } from "../types.js";

export function deleteCommand(state:State,input:DeleteMemo["input"]){
    return deleteMemoService(state,input);
}