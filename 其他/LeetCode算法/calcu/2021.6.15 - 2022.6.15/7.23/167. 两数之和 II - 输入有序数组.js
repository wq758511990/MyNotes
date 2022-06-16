/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    const dict = {}
    const n = numbers.length
    for (let i = 0; i < n; i++) {
        let dis = target - numbers[i]
        if (dict[dis] !== undefined) {
            return dict[dis] > i ? [i + 1, dict[dis] + 1] : [dict[dis] + 1, i + 1]
        }
        dict[numbers[i]] = i
    }
};

console.log(twoSum([2,7,11,15],
    9))