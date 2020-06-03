"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
from collections import deque
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        # if not root: return root
        # pre = root
        # while pre :
        #     cur = pre
        #     while cur :
        #         if cur.left :
        #             if cur.right :
        #                 cur.left.next = cur.right
        #                 if cur.next :
        #                     if cur.next.left : cur.right.next = cur.next.left
        #                     elif cur.next.right: cur.right.next = cur.next.right
        #             else :
        #                 if cur.next :
        #                     if cur.next.left : cur.left.next = cur.next.left
        #                     elif cur.next.right: cur.left.next = cur.next.right
        #         elif cur.right :
        #             if cur.next :
        #                 if cur.next.left : cur.right.next = cur.next.left
        #                 elif cur.next.right: cur.right.next = cur.next.right

        #         cur = cur.next
        #     pre = pre.left
        # return root

        # 队列迭代可以直接解，和上一题完全一样
        # if not root: return root
        # queue = deque()
        # queue.appendleft(root)

        # while queue :
        #     lq = len(queue)
        #     q = None
        #     for _ in range(lq) :
        #         tmp = queue.pop()
        #         if q :
        #             q.next = tmp
        #             q = q.next
        #         else :
        #             q = tmp

        #         if tmp.left: queue.appendleft(tmp.left)
        #         if tmp.right: queue.appendleft(tmp.right)
            
        #     q.next = None
        
        # return root

        head = root
        while head :
            cur = head
            head = pre = None # 下一层的头结点和前置节点
            while cur :
                if cur.left :
                    # 还没找到下一层的前置节点， 则设置前置节点为cur.left
                    if not pre : head = pre = cur.left
                    # 已找到，则前置节点的next就是cur.left
                    else : 
                        pre.next = cur.left
                        pre = pre.next
                
                if cur.right :
                    if not pre: head = pre = cur.right
                    else : 
                        pre.next = cur.right
                        pre = pre.next
                cur = cur.next
        return root


