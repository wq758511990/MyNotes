var finalPrice = function(prices) {
    const n = prices.length;
    const ans = new Array(n).fill(0);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }
        ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
        stack.push(prices[i]);
    }
    return ans;
}; 
console.log(finalPrice([8, 4, 6, 2, 3]));