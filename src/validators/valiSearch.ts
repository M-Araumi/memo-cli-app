type searchInput = {
    keyword: string | undefined
};

export function validateSearch(input: searchInput) {
    if (!input.keyword?.trim()) {
        throw new Error("検索するキーワードを入力してください");
    }
}