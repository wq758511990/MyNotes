var rangeSumBST = function (root, low, high) {
  let res = 0
  function dfs (root) {
    if (root) {
      if (root.val >= low && root.val <= high) {
        res += root.val
      }
      // 二叉搜索树，当前值大于low的时候，左子树才有可能大于low， 否则不需要dfs左子树
      if (root.val > low) {
        dfs(root.left)
      }
      // 同理，当前值小于hight的时候，右子树才有可能小于hight， 否则不需要dfs右子树
      if (root.val < high) {
        dfs(root.right)
      }
    }
  }
  dfs(root)
  return res
};