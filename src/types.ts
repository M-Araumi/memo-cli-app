export type Memo = {
    createdDate: Date;
    id: number;
    title: string;
    memoText: string;
    updatedDate: Date;
};
export type State = {
    memos: Memo[];
    nextId: number;
}
export type AddMemo = {
    type: "add";
    input: {
        title: string;
        memoText: string;
    }
}
export type DisplayList = {
    type: "display"
}
export type UpdateMemo = {
    type: "update"
    input: {
        id: number;
        title?: string;
        memoText?: string;
    }
}
export type DeleteMemo = {
    type: "del"
    input: {
        id: number;
    }
}
export type SearchMemo = {
    type: "search"
    input: {
        keyword: string;
    }
}
export type StatsMemo = {
    type: "stats"
}
export type StatsMemoCount= {
        totalCount: number;
        updateCount: number;
        averageWordCount: number;
}
export type Command = AddMemo | DisplayList | UpdateMemo | DeleteMemo | SearchMemo | StatsMemo ;