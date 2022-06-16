/**
 * @param {number[]} nums
 * @return {number}
 */
//  var majorityElement = function(nums) {
//     const n = nums.length
//     const dict = {}
//     let tmp = 0
//     let res = -1
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i]
//         if (!dict[num]) {
//             dict[num] = 1
//         } else {
//             dict[num]++
//         }
//     }
//     for (let key in dict) {
//         if (dict[key] > tmp) {
//             tmp = dict[key]
//         }
//     }
//     for (let key in dict) {
//         if (dict[key] === tmp && tmp > (n / 2)) {
//            res = key
//            return 
//         }
//     }
//     return res
// };

var majorityElement = function(nums) {
    let len = nums.length, m = new Map(), max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        m.set(num, m.get(num) ? m.get(num) + 1 : 1)
        max = Math.max(m.get(num), max)
        if (max > len / 2) {
            return num
        }
    }
    return -1
}

console.log(majorityElement([1,2,5,9,5,9,5,5,5]))