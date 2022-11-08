function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedMap = new Map()
    let cnt = 0
    const isAllowedWrod = (word: string) => {
        for (let c of word) {
            if (!allowedMap.get(c)) return false
        }
        return true
    }
    for (let c of allowed) {
        !allowedMap.get(c) && allowedMap.set(c, 1)
    }
    for (let word of words) {
        if (isAllowedWrod(word)) cnt++
    }
    return cnt
};

