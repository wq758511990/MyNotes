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

 function largestValues(root: TreeNode | null): number[] {
    if (!root) return []
    let roots = [root]
    const ans = []
    let nextRoots = []
    let max = Number.MIN_SAFE_INTEGER
    while (roots.length) {
        const p = roots.shift()
        max = Math.max(p.val, max)
        if (p.left) nextRoots.push(p.left)
        if (p.right) nextRoots.push(p.right)

        if (!roots.length) {
            ans.push(max)
            max = Number.MIN_SAFE_INTEGER
            roots = nextRoots
            nextRoots = []
        }
    }
    return ans
};