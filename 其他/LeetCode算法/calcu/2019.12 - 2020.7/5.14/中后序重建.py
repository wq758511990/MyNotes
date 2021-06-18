# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        def handler(in_left, in_right) :
            if in_left > in_right :
                return None

            val = postorder.pop()
            root = TreeNode(val)
            idx = idx_map[val]
            root.right = handler(idx + 1, in_right)
            root.left = handler(in_left, idx - 1)
            return root

        idx_map = {val: key for key, val in enumerate(inorder)}
        return handler(0, len(inorder) - 1)