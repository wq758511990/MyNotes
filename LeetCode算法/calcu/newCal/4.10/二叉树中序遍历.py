# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def inorderTraversal(self, root: TreeNode) -> list:
        if not root: return []
        # return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)

        stack, res = [], []
        cur = root
        while stack or cur:
            if cur :
                stack.append(cur)
                cur = cur.left
            else :
                cur = stack.pop()
                res.append(cur.val)
                cur = cur.right
        return res