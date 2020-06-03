# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # 利用队列实现迭代算法
        if not head:
            return None
        deq = deque()
        while head.next:
            deq.append(head)
            head = head.next
        # 此时head指向最后一个不为空的节点
        temp = head
        while deq:
            node = deq.pop()
            node.next = temp.next
            temp.next = node
            temp = node
        return head


        # 双指针，一个顺序遍历，一个逆序遍历
        if not head: return []
        pre = head
        cur = None
        while pre :
            tmp = ListNode(pre.val)
            tmp.next = cur
            cur = tmp
            pre = pre.next
        return cur