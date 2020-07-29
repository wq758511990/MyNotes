# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        slowHead = ListNode(None)
        resList = slowHead
        cur = head.val
        while head :
            if not head.val == cur :
                slowHead.next = head
                cur = head.val

            head = head.next
        return resList