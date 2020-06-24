# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from collections import deque
class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root: return []
        res = []
        q = deque()
        q.append(root)
        while q :
            tmp = q.popleft()
            res.append(tmp.val)
            if tmp.left: q.append(tmp.left)
            if tmp.right: q.append(tmp.right)

        return res