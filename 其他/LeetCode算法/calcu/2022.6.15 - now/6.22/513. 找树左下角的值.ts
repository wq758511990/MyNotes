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

function findBottomLeftValue(root: TreeNode | null): number {
  // let roots = [root];
  // let ret = 0
  // while(roots.length) {
  //     const p = roots.shift()
  //     if (p.right) {
  //         roots.push(p.right)
  //     }
  //     if (p.left) {
  //         roots.push(p.left)
  //     }
  //     ret = p.val
  // }
  // return ret
  let curHeight = 0;
  let curVal = 0;
  const dfs = (root: TreeNode, height: number) => {
    if (!root) return;
    height++;
    dfs(root.left, height);
    dfs(root.right, height);
    if (height > curHeight) {
      curHeight = height;
      curVal = root.val;
    }
  };
  dfs(root, 0);
  return curVal;
}
