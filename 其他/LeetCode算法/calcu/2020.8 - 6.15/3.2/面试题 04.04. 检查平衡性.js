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
var isBalanced = function (root) {
  if (!root) {
    return true
  }
  getHeight(root)
  return flag
};

function getHeight (node) {
  if (!node) {
    return 0
  }
  const left = getHeight(node.left)
  const right = getHeight(node.right)
  if (Math.abs(left - right) > 1) {
    flag = false
  }
  return Math.max(left, right) + 1
}

const node = new TreeNode(1)
console.log(isBalanced(node))