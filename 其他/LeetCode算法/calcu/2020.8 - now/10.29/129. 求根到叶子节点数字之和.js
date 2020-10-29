/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const dfs = (root, prevSum) => {
  if (!root) {
    return 0;
  }
  const sum = prevSum * 10 + root.val;
  if (!root.left && !root.right) {
    return sum;
  }
  return dfs(root.left, sum) + dfs(root.right, sum);
};
var sumNumbers = function (root) {
  return dfs(root, 0);
};

// var sumNumbers = function (root) {
//   let res = [];
//   let tmp = "";
//   function getRoot(root, tmp) {
//     if (!root) {
//       res.push(tmp);
//       return;
//     }
//     tmp += root.val;
//     if (root.left) getRoot(root.left, tmp);
//     if (root.right) getRoot(root.right, tmp);
//   }
//   getRoot(root, tmp);
//   const total = res.reduce((a, b) => {
//     return parseInt(a) + parseInt(b);
//   });
//   return total;
// };
