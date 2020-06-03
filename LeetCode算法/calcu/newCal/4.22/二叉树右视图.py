# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rightSideView(self, root: TreeNode) -> list:
        def handler(root, level) :
            if len(rlist) == level :
                rlist.append([])
            
            if root :
                rlist[level].append(root.val)
            handler(root.left, level + 1)
            handler(root.right, level + 1)


        if not root :
            return []
        rlist = []
        level = 0
        handler(root, level)
        rview = [item[-1] for item in rlist]
        return rview


