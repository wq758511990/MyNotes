function shuffle(nums: number[], n: number): number[] {
  let l = 0,
    r = n;
  const ans: number[] = [];
  while (n--) {
    ans.push(nums[l]);
    ans.push(nums[r]);
    l++;
    r++;
  }
  return ans;
}

console.log(shuffle([1, 2], 1));
