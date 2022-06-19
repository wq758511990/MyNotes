/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const sumMap = new Map();
  let maxCount = 0;

  const getRootSum = (root) => {
    if (!root) {
      return 0;
    }
    const sum = root.val + getRootSum(root.left) + getRootSum(root.right);
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    maxCount = Math.max(maxCount, sumMap.get(sum));
    return sum;
  };
  getRootSum(root);
  const list = [];
  for (let entry of sumMap.entries()) {
    if (entry[1] === maxCount) {
      list.push(entry[0]);
    }
  }
  return list;
};

console.log(findFrequentTreeSum([5, 2, -3]));
