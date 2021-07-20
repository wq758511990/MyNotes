/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let l = (n / 2) - 1, r = n / 2
    let max = 0
    while(l >= 0) {
        let sum = nums[l] + nums[r]
        max = max < sum ? sum : max
        l--
        r++
    }
    return max
};

console.log(minPairSum([3,5,4,2,4,6]))