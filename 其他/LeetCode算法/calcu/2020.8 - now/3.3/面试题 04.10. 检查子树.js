/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
let flag
var checkSubTree = function (t1, t2) {
  flag = false
  if (!t2) {
    return false
  }
  dfs(t1, t2)
  return flag
}

function dfs(root, t2) {
  if (!root) {
    return
  }
  if (root.val === t2.val) {
    flag = isSameNode(root, t2) ? true : false
  }
  root.left && dfs(root.left, t2)
  root.right && dfs(root.right, t2)
}

function isSameNode(r1, r2) {
  if (!r1 && !r2) {
    return true
  }
  if (!r1 || !r2) {
    return false
  }
  if (r1.val === r2.val) {
    return true
  }
  return isSameNode(r1.left, r2.left) && isSameNode(r1.right, r2.right)
}
