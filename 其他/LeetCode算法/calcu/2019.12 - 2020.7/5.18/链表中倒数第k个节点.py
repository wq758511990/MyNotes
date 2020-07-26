# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:

    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        pre, aft = head, head
        for _ in range(k) :
            if not aft : return
            aft = aft.next
        while aft :
            pre, aft = pre.next, aft.next
        return pre