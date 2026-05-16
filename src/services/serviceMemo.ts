import type { State,Memo,AddMemo,UpdateMemo, DeleteMemo } from "../types.js";

export function addMemoService(state:State,input:AddMemo["input"]){
    const newMemo: Memo = {
        createdDate: new Date(),
        id: state.nextId,
        title: input.title,
        memoText: input.memoText,
        updatedDate: new Date()
    }
    return{
        ...state,
        memos: [...state.memos, newMemo],
        nextId: state.nextId +1
    };
}
export function updateMemoService(state:State,input:UpdateMemo["input"]){
    let found = false;
    const updateMemos = state.memos.map(memo => {
        if (memo.id !== input.id) {
            return memo;
        }
        found = true;
        return {
            ...memo,
            title: input.title ?? memo.title,
            memoText: input.memoText ?? memo.memoText,
            updatedDate: new Date()
        };
    });
    if (!found) {
        throw new Error("対象のメモが見つかりません");
    }
    return {
        ...state,
        memos: updateMemos
    };
}
export function deleteMemoService(state:State,input:DeleteMemo["input"]){
    const searchId = state.memos.find(memo => memo.id === input.id)
    if(!searchId){
        throw new Error("入力したIDのメモが見つかりません");
    }
    return {
        ...state,
        memos: state.memos.filter(memo => memo.id !== input.id)
    }
}