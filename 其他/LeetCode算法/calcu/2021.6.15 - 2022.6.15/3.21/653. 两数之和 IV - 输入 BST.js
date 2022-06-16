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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (!root) return false
  const numDict = {}
  let ans = false
  const dfs = (root) => {
    const val = root.val
    if (numDict[val] !== undefined) {
      ans = true
      return
    } else {
      numDict[k - val] = val
    }
    if (root.left) dfs(root.left)
    if (root.right) dfs(root.right)
  }
  dfs(root)
  return ans
};

var findTarget = function (root, k) {
  const set = new Set();
  const helper = (root, k) => {
    if (!root) {
      return false;
    }
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return helper(root.left, k) || helper(root.right, k);
  }
  return helper(root, k);
};