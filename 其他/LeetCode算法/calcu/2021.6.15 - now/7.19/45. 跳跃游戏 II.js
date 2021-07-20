/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let position = nums.length - 1;
    let steps = 0;
    while (position > 0) {
        for (let i = 0; i < position; i++) {
            if (i + nums[i] >= position) {
                position = i;
                steps++;
                break;
            }
        }
    }
    return steps;
};

console.log(jump([2,3,1,1,4]))