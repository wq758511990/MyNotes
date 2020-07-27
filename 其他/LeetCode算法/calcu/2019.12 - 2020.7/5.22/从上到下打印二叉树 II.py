# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# from collections import deque
class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root: return []
        res = []
        cur_level = [root]
        while cur_level :
            tmp = []
            next_level = []
            for node in cur_level :
                tmp.append(node.val)
                if node.left :
                    next_level.append(node.left)
                if node.right :
                    next_level.append(node.right)
            res.append(tmp)
            cur_level = next_level
        return res