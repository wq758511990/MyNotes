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
 * @return {boolean}
 */
var isBalanced = function (root) {
  //   if (!root) {
  //     return true;
  //   }
  //   const dfs = (root) => {
  //     if (!root) {
  //       return 0;
  //     }
  //     return (
  //       Math.abs(height(root.left) - height(root.right)) <= 1 &&
  //       isBalanced(root.left) &&
  //       isBalanced(root.right)
  //     );
  //   };
  //   const height = (root) => {
  //     if (root === null) {
  //       return 0;
  //     }
  //     return Math.max(height(root.left), height(root.right)) + 1;
  //   };
  //   return dfs(root);

  const recur = (root) => {
    if (!root) return 0;
    let left = recur(root.left);
    if (left === -1) return -1;
    let right = recur(root.right);
    if (right === -1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
  };

  return recur(root) !== -1;
};
