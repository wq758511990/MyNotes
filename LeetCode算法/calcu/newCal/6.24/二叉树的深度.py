# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        # if not root: return 0
        # depth = 1
        # q = [root]
        # nextLevel = []
        # while q :
        #     for node in q :
        #         if node.left : nextLevel.append(node.left)
        #         if node.right : nextLevel.append(node.right)
        #     q = nextLevel
        #     depth += 1
        #     nextLevel = []
        
        # return depth

        
        if not root: return 0
        else: 
            left_height = self.maxDepth(root.left)
            right_heigt = self.maxDepth(root.right)
            return max(left_height, right_heigt) + 1