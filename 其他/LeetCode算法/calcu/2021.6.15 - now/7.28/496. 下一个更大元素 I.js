/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    let dict = {}
    let ans = []
    for (let i = 0; i < nums2.length; i++) {
        let targetNum = stack.slice(-1)
        if (targetNum.length && nums2[i] > targetNum) {
            dict[targetNum] = nums2[i]
            stack.pop()
            stack.push(nums2[i])
        } else {
            stack.push(nums2[i])
        }
    }
    for (let i = 0; i < stack.length; i++) {
        dict[stack[i]] = -1
    }
    for (let i = 0; i < nums1.length; i++) {
        ans.push(dict[nums1[i]])
    }
    return ans
};

console.log(nextGreaterElement([4,1,2], [1, 3, 4, 2]))