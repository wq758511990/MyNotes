/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null
  }
  const m = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[m])
  root.left = sortedArrayToBST(nums.slice(0, m))
  root.right = sortedArrayToBST(nums.slice(m + 1))
  return root
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))