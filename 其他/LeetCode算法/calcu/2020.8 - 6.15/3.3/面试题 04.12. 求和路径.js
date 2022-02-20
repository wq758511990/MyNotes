/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let ans = []
  dfs(root)
  return ans
  function dfs(root) {
    if (!root) {
      return
    }
    const curArr = []
    const curSum = 0
    getNodeSum(root, sum, curArr, curSum)
    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }
  function getNodeSum(root, sum, curArr, curSum) {
    if (!root) {
      return
    }
    curArr.push(root.val)
    curSum += root.val
    if (curSum === sum) {
      ans.push(curArr)
    }
    if (curSum > sum) {
      return
    }
    getNodeSum(root.left, sum, curArr, curSum)
    getNodeSum(root.right, sum, curArr, curSum)
  }
}

var pathSum = function (root, sum) {
  if (!root) return 0
  return helper(root, sum) + pathSum(root.right, sum) + pathSum(root.left, sum)

  function helper(root, sum) {
    if (!root) return 0
    if (root.val === sum)
      return (
        1 +
        helper(root.left, sum - root.val) +
        helper(root.right, sum - root.val)
      )
    return (
      helper(root.left, sum - root.val) + helper(root.right, sum - root.val)
    )
  }
}

var pathSum = function (root, sum) {
  if (!root) {
    return 0
  }
  let ans = 0
  let pathArr = []
  let pathSum = 0
  function dfs(root) {
    pathSum += root.val
    pathArr.push(root.val)
    if (pathSum === sum) {
      ans += 1
    }
    let curPathSum = pathSum
    for (var i = 0; i < pathArr.length - 1; i++) {
      curPathSum -= pathArr[i]
      if (curPathSum === sum) {
        ans += 1
      }
    }

    root.left && dfs(root.left)
    root.right && dfs(root.right)
    pathSum -= root.val
    pathArr.pop()
  }
  dfs(root)
  return ans
}
