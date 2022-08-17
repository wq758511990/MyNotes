class OrderedStream {
    ans: string[] = []
    ptr: number = 1
    constructor(n: number) {

    }

    insert(idKey: number, value: string): string[] {
        const result = []
        this.ans[idKey] = value
        while(this.ans[this.ptr]) {
            result.push(this.ans[this.ptr])
            this.ptr++
        }
        return result
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */