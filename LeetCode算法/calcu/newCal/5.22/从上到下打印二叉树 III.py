# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        res = []
        cur_level = [root]
        while cur_level :
            tmp = []
            next_level = []
            for node in cur_level :
                tmp.append(node.val)

                if node.left: next_level.append(node.left)
                if node.right: next_level.append(node.right)

            cur_level = next_level
            if len(res) % 2 == 0: res.append(tmp)
            else: res.append(tmp[::-1])
        return res