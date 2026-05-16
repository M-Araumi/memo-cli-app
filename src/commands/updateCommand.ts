import { updateMemoService } from "../services/serviceMemo.js";
import type { State,UpdateMemo } from "../types.js";

export function updateCommand(state:State,input:UpdateMemo["input"]){
    return updateMemoService(state,input);
}