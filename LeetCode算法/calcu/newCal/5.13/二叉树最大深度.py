# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        def handler(level, node) :
            if not node: return 
            if len(res) == level: res.append([])
            res[level].append(node.val)

            handler(level + 1, node.left)
            handler(level + 1, node.right)

        if not root: return []
        res = []
        handler(0, root)
        return len(res)