function maxProduct(nums: number[]): number {
    const sortedArr = nums.sort((a, b) => b - a)
    return (nums[0] - 1) * (nums[1] - 1)
};