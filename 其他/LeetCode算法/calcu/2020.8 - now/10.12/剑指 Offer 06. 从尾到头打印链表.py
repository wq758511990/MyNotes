# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
      # dq = []
      # while head :
      #   dq.insert(0, head.val)
      #   head = head.next
      # return dq

      # 递归
      return self.reversePrint(head.val) + [head.val] if head else []