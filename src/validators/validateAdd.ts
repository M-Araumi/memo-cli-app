type AddInput = {
    title: string | undefined;
    memoText?: string | undefined;
};

export function validateAdd(input: AddInput) {
    if (!input.title?.trim()) {
        throw new Error("タイトルを入力してください");
    }

    if (!input.memoText?.trim()) {
        throw new Error("本文を入力してください");
    }
}