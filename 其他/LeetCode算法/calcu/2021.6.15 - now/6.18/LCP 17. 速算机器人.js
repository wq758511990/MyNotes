/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // let x = 1, y = 0
    // for (let c of s) {
    //     switch(c) {
    //         case 'A': x = 2 * x + y; break;
    //         case 'B': y = 2 * y + x; break;
    //         default: break;
    //     }
    // }
    // return x + y
    // A
    // x + y = (2x + y) + y = 2(x + y)
    // B
    // x + y = x + (2y + x) = 2(x + y)
    // 结论 每一个A/B 都会使得最终值变为原来的2倍
    return 2 ** s.length
};

console.log(calculate('AB'))