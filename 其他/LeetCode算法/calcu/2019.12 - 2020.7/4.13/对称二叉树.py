# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        # 层序遍历 判断每一次是否是回文即可，需要注意的是如果当前node不存在，append一个None值并且跳过此次循环
        # cur_level = [root]
        # while cur_level :
        #     tmp, next_level = [], []
        #     lenCur = len(cur_level)
        #     for node in cur_level :
                
        #         if not node :
        #             tmp.append(None)
        #             continue
        #         else :
        #             tmp.append(node.val)
                
        #         next_level.append(node.left)
        #         next_level.append(node.right)
        #     if tmp != tmp[::-1] :
        #         return False
        #     cur_level = next_level

        # -1 - i 对应镜像元素
        # for i in range(lenCur // 2) :
        #     if tmp[i] != tmp[-1 - i] :
        #         return False

        # return True

        # 递归
        def check(node1, node2) :
            if not node1 and not node2 : # 当前节点没有子节点
                return True
            if not node1 or not node2 : # 当前节点有一个子节点
                return False
            
            if node1.val != node2.val :
                return False
            
            return check(node1.left, node2.right) and check(node1.right, node2.left)
        
        check(root, root)

