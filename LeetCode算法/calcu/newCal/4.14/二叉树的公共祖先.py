# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        def handler(cur_node) :
            if cur_node.val == p or cur_node.val == q :
                return 1
            else :
                return 0
            
            left = handler(cur_node.left)
            right = handler(cur_node.right)

            if left + right == 2 :
                return cur_node.val
        
        return handler(root)