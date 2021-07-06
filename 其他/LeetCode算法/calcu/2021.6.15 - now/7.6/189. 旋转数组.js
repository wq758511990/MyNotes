/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // const n = nums.length
    // nums = nums.concat(nums)
    // return nums.slice(n - k, n * 2 - k)

    const reverse = (arr, start, end) => {
        while(start < end) {
            const tmp = arr[start]
            arr[start] = arr[end]
            arr[end] = tmp
            start += 1
            end -= 1
        }
    }
    const n = nums.length
    k %= n
    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
    return nums
};

console.log(rotate([-1], 2))

