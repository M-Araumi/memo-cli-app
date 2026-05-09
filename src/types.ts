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