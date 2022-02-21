# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root: return 1
        return min(self.minDepth(root.left), self.minDepth(root.right))

        if not root: return 0
        if not root.left and not root.right: return 1
        min_depth = 10**9
        if root.left :
            min_depth = min(self.minDepth(root.left), min_depth)
        if root.right :
            min_depth = min(self.minDepth(root.right), min_depth)
        return min_depth + 1