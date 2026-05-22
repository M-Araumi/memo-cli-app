export function parseOptions<T extends string>(
    args: string[],
    optionMap: Record<string,T>
) {
    const result: Partial<Record<T,string>> = {};
    
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