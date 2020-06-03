# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def helper(in_left, in_right) :
            if in_left > in_right :
                return

            val = preorder.pop(0)
            root = TreeNode(val)
            idx = idx_map[val]

            root.left = helper(in_left, idx - 1)
            root.right = helper(idx + 1, in_right)

            return root
        
        idx_map = [value, key for key, value in enumerate(inorder)]
        return helper(0, len(inorder) - 1)