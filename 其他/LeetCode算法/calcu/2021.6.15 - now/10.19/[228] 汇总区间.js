var summaryRanges = function (nums) {
  const n = nums.length;
  if (!n) return [];
  const ans = [];
  let cur = [nums[0]];
  const handleCur = (length) => {
    const str = length === 1 ? `${cur[0]}` : `${cur[0]}->${cur[length - 1]}`;
    ans.push(str);
  };
  for (let i = 1; i < nums.length; i++) {
    let curLength = cur.length;
    if (nums[i] === cur[curLength - 1] + 1) {
      cur.push(nums[i]);
    } else {
      handleCur(curLength);
      cur = [nums[i]];
    }
  }
  handleCur(cur.length);
  return ans;
};

console.log(summaryRanges([0]));
