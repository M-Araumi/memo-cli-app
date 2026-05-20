type UpdateOptions = {
    id?: string;
    title?: string;
    memoText?: string;
};

export function validateUpdate(input: UpdateOptions) {
    if (input.id === undefined) {
        throw new Error("idは必須");
    }
    if (!input.title && !input.memoText) {
        throw new Error("更新内容がありません");
    }
};