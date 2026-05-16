import { addMemoService } from "../services/serviceMemo.js";
import type { State } from "../types.js";
import type { AddMemo } from "../types.js";

export function addCommand(state:State,input:AddMemo["input"]){
    return addMemoService(state,input);
}