function canBeEqual(target: number[], arr: number[]): boolean {
    const targetDict = {}
    for (let i = 0; i < target.length; i++) {
        const num = target[i]
        if (targetDict[num]) {
            targetDict[num]++
        } else {
            targetDict[num] = 1
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!targetDict[arr[i]]) return false
        targetDict[arr[i]]--
    }
    return true

};

