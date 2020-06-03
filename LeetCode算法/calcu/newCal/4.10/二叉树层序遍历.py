# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> list:
        # 迭代
        if not root: return []
        res = []
        cur_level = [root]
        while cur_level:
            tmp = []
            next_level = []
            for node in cur_level:
                tmp.append(node.val)
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
            res.append(tmp)
            cur_level = next_level
        return res
        
        # if not root: return []

        # res, stack = [], [root]
        # while stack :
        #     cur = stack.pop(0)
        #     res.append(cur)
        #     if cur.left: stack.append(cur.left)
        #     if cur.right: stack.append(cur.right)

        # return res


        # 递归
        res = []
        def handler(root, depth) :
            if not root: return[]
            if len(root) == depth :
                res.append([])
            res[depth].append(root.val)
            handler(root.left, depth + 1)
            handler(root.right, depth + 1)
        handler(root, 0)
        return res
        
