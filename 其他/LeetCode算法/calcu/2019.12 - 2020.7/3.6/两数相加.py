class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def addTwoNumbers(l1, l2):
    newNode=ListNode(0)
    ansNode=newNode
    flag=0
    while l1.val>=0 or l2.val>=0:
        x=l1.val if l1.val>=0 else 0
        y=l2.val if l2.val>=0 else 0
        sum=x+y+flag
        flag=sum//10
        newNode.val=sum%10
        l1=l1.next if l1.next else ListNode(-1)
        l2=l2.next if l2.next else ListNode(-1)
        if l1.val>=0 or l2.val>=0 or flag:
            newNode.next=ListNode(0)
            newNode=newNode.next
    if flag==1:
        newNode.val=1
    return ansNode
    