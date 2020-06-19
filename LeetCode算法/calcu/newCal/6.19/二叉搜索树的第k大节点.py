# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution
    def kthLargest(self, root: TreeNode, k: int) -> int:
        # if not root: return None
        # tmp = []
        
        # def helper(root) :
        #     if not root: return
        #     tmp.append(root.val)

        #     helper(root.left)
        #     helper(root.right)
        
        # helper(root)
        # res = sorted(tmp, reverse=True)
        # return res[k]

        def dfs(root) :
            if not root: return
            dfs(root.right)
            if self.k == 0: return
            self.k -= 1
            if self.k == 0: self.res == root.val
            dfs(root.left)

        self.k = k
        dfs(root)
        return self.res
    