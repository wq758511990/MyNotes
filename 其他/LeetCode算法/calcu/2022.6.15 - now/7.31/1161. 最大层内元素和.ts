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

function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 1;
  let maxSum = root.val;
  let ans = 1;
  let q: TreeNode[] = [];
  q.push(root);
  for (let level = 1; q.length > 0; ++level) {
    const nq: TreeNode[] = [];
    let sum = 0;
    for (const node of q) {
      sum += node.val;
      if (node.left) {
        nq.push(node.left);
      }
      if (node.right) {
        nq.push(node.right);
      }
    }
    if (sum > maxSum) {
      maxSum = sum;
      ans = level;
    }
    q = nq;
  }
  return ans;
}

function maxLevelSum1(root: TreeNode | null): number {
  if (!root) return 1;
  let q: TreeNode[] = [];
  let sumMax = root.val;
  let ans = 1;
  q.push(root);
  for (let index = 1; q.length > 0; index++) {
    const nq: TreeNode[] = [];
    let max = 0;
    for (const node of q) {
      if (node.left) nq.push(node.left);
      if (node.right) nq.push(node.right);
      max += node.val;
    }
    if (max > sumMax) {
      sumMax = max;
      ans = index;
    }
    q = nq;
  }
  return ans;
}
