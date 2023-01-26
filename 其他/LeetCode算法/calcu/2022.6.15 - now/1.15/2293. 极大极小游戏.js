/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  const len = nums.length;
  const rollArr = [...nums];
  function dfs(arr, len) {
    if (len === 1) return;

    const newLen = arr.length / 2;
    for (let i = 0; i < newLen; i++) {
      if (i % 2 === 0) {
        rollArr[i] = Math.min(rollArr[2 * i], rollArr[2 * i + 1]);
      } else {
        rollArr[i] = Math.max(rollArr[2 * i], rollArr[2 * i + 1]);
      }
    }

    dfs(rollArr, len / 2);
  }
  dfs(rollArr, len)
  return rollArr[0];
};

console.log(minMaxGame([3]));
