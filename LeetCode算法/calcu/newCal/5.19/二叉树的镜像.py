# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root: return
        stack = [root]
        while stack :
            tmp = stack.pop()
            if tmp.left: stack.append(tmp.left)
            if tmp.right: stack.append(tmp.right)
            tmp.left, tmp.right = tmp.right, tmp.left
        return root
        
        if not root: return
        root.left, root.right = self.mirrorTree(root.right), self.mirrorTree(root.left)
        return root