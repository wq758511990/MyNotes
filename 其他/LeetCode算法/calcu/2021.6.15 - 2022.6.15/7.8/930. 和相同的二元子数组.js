/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function(nums, goal) {
    let sum = 0;
    const cnt = new Map();
    let ret = 0;
    for (const num of nums) {
        cnt.set(sum, (cnt.get(sum) || 0) + 1);
        sum += num;
        ret += cnt.get(sum - goal) || 0;
    }
    return ret;
};
console.log(numSubarraysWithSum([1,0,1,0,1], 2))