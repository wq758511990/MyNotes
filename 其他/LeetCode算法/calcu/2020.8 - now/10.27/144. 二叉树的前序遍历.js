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
var preorderTraversal = function (root) {
  // function preorder(root) {
  //     if (!root) return
  //     res.push(root.val)
  //     preorder(root.left)
  //     preorder(root.right)
  // }

  // let res = []
  // preorder(root)
  // return res
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let item = queue.pop();
    res.push(item.val);
    item.right && queue.push(item.right);
    item.left && queue.push(item.left);
  }
  return res;
};
