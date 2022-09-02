function finalPrices(prices: number[]): number[] {
    const n = prices.length
    const ans = new Array(n).fill(0)
    const stack: number[] = []
    for (let i = n - 1; i >= 0; i--) {
        while(stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop()
        }
        ans[i] = stack.length ? prices[i] - stack[stack.length - 1] : prices[i]
        stack.push(prices[i])
    }
    return ans
}

console.log(finalPrices([8, 4, 6, 2, 3]));
