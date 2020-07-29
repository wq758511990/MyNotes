# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        # 特判 
        if not head: return None
        if not k : return head

        # 前后节点， 找到倒数第k个节点，以此节点作为头， k的值需要根据长度变化
        preNode = head
        afNode = head

        # 记录链表长度
        length = 1
        # 暂存k的值
        bk = k
        while k :
            # 如果当前节点存在下一个节点
            if preNode.next:
                # 长度加一，当前节点指向下一个节点
                length += 1
                preNode = preNode.next
            else :
                # 若不存在下一个节点，判断这时候长度是否为1
                if length == 1 :
                    # 长度为1直接返回head
                    return head
                # 否则说明到末尾了， 这时候根据length的值重设k
                else :
                    if bk >= length: k = bk % length
                preNode = head
                continue
            k -= 1
        
        # 之后令preNode继续遍历，直至尾节点，afNode也跟着一起遍历
        while preNode.next :
            preNode = preNode.next
            afNode = afNode.next
        
        # 至此，令preNode下一个节点指向头结点
        # 让头结点指向afNode的下一个节点
        # afNode下一个节点指向None        

        preNode.next = head
        head = afNode.next
        afNode.next = None
        

        return head

