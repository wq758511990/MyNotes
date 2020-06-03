# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def levelOrder(self, root: TreeNode) -> list:
        # if not root: return []
        # cur_level = [root]
        # res = []
        # while cur_level :
        #     next_level = []
        #     tmp = []
        #     for node in cur_level :
        #         tmp.append(node.val)
        #         if node.left :
        #             next_level.append(node.left)
        #         if node.right :
        #             next_level.append(node.right)
        #     cur_level = next_level
        #     res.append(tmp)
        
        # return res

        def handler(level, node, res) :
            if not node: return
            if len(res) == level : res.append([])
            res[level].append(node.val)

            handler(level + 1, node.left, res)
            handler(level + 1, node.right, res)
        
        if not root: return []
        res = []
        handler(0, root, res)
        return res