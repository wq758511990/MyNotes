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
        if not root: return root
        queue = deque()
        queue.appendleft(root)
        while queue :
            lq = len(queue)
            p = None

            for _ in range(lq) :
                tmp = queue.pop()
                if p :
                    p.next = tmp
                    p = p.next
                else :
                    p = tmp
                
                if tmp.left: queue.appendleft(tmp.left)
                if tmp.right: queue.appendleft(tmp.right)
        
            p.next = None
        return root