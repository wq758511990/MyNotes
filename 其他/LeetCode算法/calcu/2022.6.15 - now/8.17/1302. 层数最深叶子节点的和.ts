/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function deepestLeavesSum(root: TreeNode | null): number {
  //   let ans = 0;
  //   if (!root) return ans;
  //   let queue = [root];
  //   let tmpQ: TreeNode[] = [];
  //   let tmpSum: number = 0
  //   while (queue.length) {
  //     let node = queue.shift();
  //     tmpSum += node?.val || 0
  //     if (node?.left) tmpQ.push(node.left);
  //     if (node?.right) tmpQ.push(node.right);
  //     if (!queue.length) {
  //         queue = tmpQ
  //         ans = tmpSum
  //         tmpQ = []
  //         tmpSum = 0
  //     }
  //   }
  //   return ans
  let ans = 0;
  if (!root) return ans;
  let queue = [root];
  while (queue.length) {
    ans = 0;
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      ans += node.val || 0;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return ans;
}
