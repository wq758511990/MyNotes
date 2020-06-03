# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def handler(in_left, in_right) :
            if in_left > in_right :
                return
            
            val = preorder.pop(0)
            root = TreeNode(val)
            idx = idx_map[val]
            root.left = handler(in_left, idx - 1)
            root.right = handler(in_right, idx + 1)

            return root
        
        idx_map = {val: key for key, val in enumerate(inorder)}
        return handler(0, len(preorder) - 1)