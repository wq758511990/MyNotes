/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const ans = new Set()
    const seen = new Map()
    const dfs = (root) => {
        if (!root) return ""
        let sb = ""
        sb += root.val
        sb += '('
        sb += dfs(root.left)
        sb += ')('
        sb += dfs(root.right)
        sb += ')'
        if (seen.has(sb)) {
            ans.add(sb)
        } else {
            seen.set(sb, 1)
        }
    }
    dfs(root)
    return [...ans]
};
