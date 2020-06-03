# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        s1, s2 = [], [] # 这里 不能写成s1 = s2 = [], 这样子s1 与 s2 指向同一块内存，s1与s2相当于同一个变量，对两个变量分别操作等于同时操作
        # 把l1的值都append到s1中
        while l1:
            s1.append(l1.val)
            l1 = l1.next
        # 将L2的值都加到s2中
        while l2:
            s2.append(l2.val)
            l2 = l2.next
        ans, carry = None, 0 # 这里ans不能为0， 否则.next会报错, carry存储进位值
        while s1 or s2 or carry != 0 :
            # 用pop从数组弹出值，这样可以保证从后面加到前面
            a1 = 0 if not s1 else s1.pop()
            a2 = 0 if not s2 else s2.pop()
            cur = a1 + a2 + carry # 当前和
            carry = cur // 10 # 当前进位
            cur %= 10 # 余值，即当前节点的val
            curnode = ListNode(cur) # 将当前点转为ListNode
            curnode.next = ans # next 指向上一次ans存储的ListNode
            ans = curnode # 更新ans
        return ans
