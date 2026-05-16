import type { State } from "../types.js";
import type { Memo} from "../types.js"
export function addMemo(state:State,title:string,memoText:string){
    const newMemo: Memo = {
        createdDate: new Date(),
        id: state.nextId,
        title: title,
        memoText: memoText,
        updatedDate: new Date()
    }
    return{
        ...state,
        memos: [...state.memos, newMemo],
        nextId: state.nextId +1
    };
}