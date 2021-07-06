/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // return nums.map(item => {
    //     return item ** 2
    // }).sort((a, b) => a - b)
    const n = nums.length
    const ans = []
    let l = 0, r = n - 1
    while(l <= r) {
        const ll = nums[l] ** 2
        const rr = nums[r] ** 2
        if (ll < rr) {
            ans.unshift(rr)
            r -= 1
        } else {
            ans.unshift(ll)
            l += 1
        }
    }
    return ans
};

console.log(sortedSquares([-4,-1,0,3,10]))