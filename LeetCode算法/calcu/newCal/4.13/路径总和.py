# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:

        def handler(root, tmpCount) :
            # 为空则返回False
            if not root : return False
            # tmpCount 加上当前节点的值
            tmpCount += root.val
            # 如果当前节点没有左右节点，即当前节点为子叶节点，判断此时tmpCount 是否等于目标值
            if not root.left and not root.right :
                return tmpCount == sum
            # 所有子叶节点的tmpCount 只要有其中一个满足等于目标值即可， 故而用or
            return handler(root.left, tmpCount) or handler(root.right, tmpCount)
        
        return handler(root, 0)
        