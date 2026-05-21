export function parseOptions(args: string[]) {
    const result: Record<string, string> = {};
    
    const optionMap: Record<string, string> = {
        "--title": "title",
        "-t": "title",
        "--memoText": "memoText",
        "-m": "memoText",
        "--id": "id",
        "-i": "id"
    };
    
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === undefined) {
            continue;
        }
        if (optionMap[arg]) {
            const key = optionMap[arg];
            const value = args[i + 1];
            if (!value || value.startsWith("-")) {
                throw new Error(`${arg} に値が指定されていません`);
            }
            result[key] = value;
            i++;
        } else {
            throw new Error(`不明なオプション: ${arg}`);
        }
    }
    return result;
};