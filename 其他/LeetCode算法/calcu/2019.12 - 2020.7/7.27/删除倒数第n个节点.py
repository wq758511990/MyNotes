# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        preNode = head
        afNode = ListNode()
        afNode.next = head
        afNode.val = None
        while n :
            preNode = preNode.next
            n -= 1
        while preNode :
            preNode = preNode.next
            afNode = afNode.next
        
        if afNode.next == head : head = head.next
        else : afNode.next = afNode.next.next
        return head