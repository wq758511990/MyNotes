/**
 * @param {number} n
 * @return {number}
 */
const dict = {
    0: 0,
    1: 1,
    2: 1
}
var tribonacci = function(n) {
    if (dict[n] !== undefined) {
        return dict[n]
    }
    const tmp = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
    dict[n] = tmp
    return tmp
};


console.log(tribonacci(4))