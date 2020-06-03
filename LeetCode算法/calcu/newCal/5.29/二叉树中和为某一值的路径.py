# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        totalList = []
        def handler(node, tmpList, prevCount) :
            if not root: return
            curCount = prevCount + node.val
            if curCount == sum : 
                totalList.append(tmpList)
                return

            tmpList.append(node.val)
            handler(root.left, tmpList, curCount)
            handler(root.right, tmpList, curCount)

        handler(root, [], 0)
        return totalList