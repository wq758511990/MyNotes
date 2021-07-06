/**
 * @param {number} n
 * @return {number}
 */
const dict = {
    0: 1,
    1: 1
}
var climbStairs = function(n) {
    
    const dfs = (n) => {
        if (dict[n] !== undefined) {
            return dict[n]
        }
        const tmp = dfs(n - 2) + dfs(n - 1)
        dict[n] = tmp
        return tmp
    }
    return dfs(n)
};


console.log(climbStairs(2))