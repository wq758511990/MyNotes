class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def preorderTraversal(self, root: TreeNode) -> list:
        return [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right) if root else []


solute = Solution()
print(solute.preorderTraversal([1, None, 2, 3]))
