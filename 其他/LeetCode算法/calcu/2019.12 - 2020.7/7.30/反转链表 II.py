# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        preNode = ListNode(None)
        preNode.next = head
        step = 1
        while preNode.next :
            preNode = preNode.next
            step += 1
            if step == m :
                pass