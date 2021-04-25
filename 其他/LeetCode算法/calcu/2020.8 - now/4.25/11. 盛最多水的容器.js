/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0, r = height.length - 1
  let maxArea = 0
  while (l < r) {
    let curArea = (r - l) * Math.min(height[r], height[l])
    maxArea = curArea > maxArea ? curArea : maxArea

    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return maxArea

  // let maxArea = 0
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     let curArea = (j - i) * Math.min(height[i], height[j])
  //     maxArea = curArea > maxArea ? curArea : maxArea
  //   }
  // }
  // return maxArea
};

console.log(maxArea([1, 1]))