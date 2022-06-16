/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 平衡判断函数
 */
 var isBalanced = function(root) {
    if(!root){
        return true
    }
    // 计算左子树和右子树的深度差
        // 判断左右子树是否平衡
    return Math.abs(depth(root.left) - depth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
};

/**
 * 深度计算函数
 */
var depth = function(root) {
    if(!root) {
        return 0
    }
    else {
                // 取左右子树中深度比较大的值作为返回结果 +1
        return Math.max(depth(root.left), depth(root.right)) + 1
    }
}