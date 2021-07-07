/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    const dict = {}
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        dict[num] = i + 1
    }
    for (let i = 0; i < numbers.length; i++) {
        const dis = target - numbers[i]
        if (dict[dis]) {
            return dict[dis] < i + 1 ? [dict[dis], i + 1] : [i + 1, dict[dis]]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))