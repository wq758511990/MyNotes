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
var evaluateTree = function (root) {
  function calTree(root) {
    if (!root) return null;

    if (root.left || root.right) {
      if (root.val === 2) {
        return calTree(root.left) || calTree(root.right);
      } else {
        return calTree(root.left) && calTree(root.right);
      }
    } else {
      return root.val;
    }
  }

  return calTree(root);
};
