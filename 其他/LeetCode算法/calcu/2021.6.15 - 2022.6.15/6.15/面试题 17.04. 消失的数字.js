/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const tmpArr = new Array(nums.length + 1).fill(false)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        tmpArr[num] = 1
    }
    for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i] === false) {
            return i
        }
    }
};

console.log(missingNumber([3,0,1]))