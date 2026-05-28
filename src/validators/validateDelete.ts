type delInput = {
    id: number
};

export function validateDelete(input: delInput) {
    if(Number.isNaN(input.id)){
        throw new Error("正しいIDを入力してください")
    }
}