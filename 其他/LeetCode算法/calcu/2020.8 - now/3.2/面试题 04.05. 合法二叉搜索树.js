/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

let flag = true
var isValidBST = function (root) {
  if (!root) return false
  isValidNode(root, -Infinity, Infinity)
  return flag
};

function isValidNode (node, lower, upper) {
  if (!node) {
    return true
  }
  if (root.val <= lower || root.val >= upper) {
    flag = false;
  }
  isValidNode(root.left, lower, root.val)
  isValidNode(root.right, root.val, upper);
}

console.log(isValidBST(new TreeNode(0)))