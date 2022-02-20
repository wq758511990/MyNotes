/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function compare(tree_1, tree_2) {
    if (!tree_1 && !tree_2) return true;
    if (!tree_1 || !tree_2) return false;
    if (tree_1.val !== tree_2.val) {
      return false;
    }
    return (
      compare(tree_1.left, tree_2.left) && compare(tree_1.right, tree_2.right)
    );
  }

  return compare(p, q);
};
