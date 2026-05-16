import { addMemo } from "../services/serviceMemo.js";
export function addCommand(state, input) {
    return addMemo(state, input.title, input.memoText);
}
//# sourceMappingURL=addCommand.js.map