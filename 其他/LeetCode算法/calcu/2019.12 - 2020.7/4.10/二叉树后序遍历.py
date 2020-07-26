# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def postorderTraversal(self, root: TreeNode) -> list:
        # 前序遍历 根->左->右
        # 后序遍历 左->右->根 
        # 则可以相当于 根->右->左 的倒序

        # if not root: return []
        # return [root.val] + self.postorderTraversal(root.right) + self.postorderTraversal(root.left)[::-1]

        if not root: return []
        res, stack = [], [root]
        while stack :
            cur = stack.pop()
            res.append(cur.val)
            if cur.left: stack.append(cur.left)
            if cur.right: stack.append(cur.right)

        return res[::-1]