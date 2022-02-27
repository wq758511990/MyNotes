var optimalDivision = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return '' + nums[0];
  }
  if (n === 2) {
    return '' + nums[0] + "/" + '' + nums[1];
  }
  const res = [];
  res.push(nums[0]);
  res.push("/(");
  res.push(nums[1]);
  for (let i = 2; i < n; i++) {
    res.push("/");
    res.push(nums[i]);
  }
  res.push(")");
  return res.join('');
};