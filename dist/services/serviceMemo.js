export function addMemo(state, title, memoText) {
    const newMemo = {
        createdDate: new Date(),
        id: state.nextId,
        title: title,
        memoText: memoText,
        updatedDate: new Date()
    };
    return {
        ...state,
        memos: [...state.memos, newMemo],
        nextId: state.nextId + 1
    };
}
//# sourceMappingURL=serviceMemo.js.map