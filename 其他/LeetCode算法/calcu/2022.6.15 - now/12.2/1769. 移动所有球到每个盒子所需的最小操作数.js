/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let cnt = 0;
  let leftCnts = 0;
  let prevSteps = 0;
  const ans = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === "1") {
      cnt++;
      prevSteps += i;
    }
  }
  ans.push(prevSteps);
  for (let i = 1; i < boxes.length; i++) {
    let curSteps = 0;
    if (boxes[i - 1] === "1") leftCnts++;
    if (boxes[i] === "1") {
      curSteps = prevSteps + leftCnts - (cnt - leftCnts - 1) - 1;
    } else {
      curSteps = prevSteps + leftCnts - (cnt - leftCnts);
    }
    ans.push(curSteps);
    prevSteps = curSteps;
  }
  return ans;
};

console.log(minOperations("001011"));
