/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const dict = {}
    for (let key in nums) {
        let dis = target - nums[key]
        if (dict[dis] !== undefined) {
            return [dict[dis], key]
        }
        dict[nums[key]] = key
    }
};

console.log(twoSum([2,7,11,15], 9))