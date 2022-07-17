function arrayNesting(nums: number[]): number {
  //   const size = nums.length - 1;
  //   let maxSize = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     maxSize = Math.max(deepSet(nums[i]), maxSize);
  //     if (maxSize > Math.floor(size / 2)) {
  //       return maxSize;
  //     }
  //   }
  //   return maxSize;

  //   function deepSet(num: number) {
  //     const numSet = new Set();
  //     let target = nums[num];
  //     while (!numSet.has(target)) {
  //       numSet.add(target);
  //       console.log("set", numSet);
  //       target = nums[target];
  //     }
  //     return numSet.size;
  //   }
  let max = 0,
    n = nums.length;
  for (let i = 0; i < nums.length; ++i) {
    let cnt = 0;
    while (nums[i] < n) {
      const num = nums[i];
      nums[i] = n;
      i = num;
      cnt++;
    }
    max = Math.max(max, cnt);
  }
  return max;
}

console.log(arrayNesting([0, 1, 3, 2, 4]));
