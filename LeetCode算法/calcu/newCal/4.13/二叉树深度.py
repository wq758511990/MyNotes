# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def __init__(self):
        self.curdepth = 0

    def maxDepth(self, root: TreeNode) -> int:

        self.handler(root, 0)
        return self.curdepth + 1

    def handler(self, root, depth):
        if not root:
            return
        self.curdepth = max(depth, self.curdepth)
        self.handler(root.left, depth + 1)
        self.handler(root.right, depth + 1)
