/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let prevNode = new ListNode(null)
    let fNode = head
    prevNode.next = fNode
    let ans = prevNode
    while(n) {
        fNode = fNode.next
        n--
    }
    while(fNode) {
        fNode = fNode.next
        prevNode = prevNode.next
    }
    prevNode.next = (prevNode.next && prevNode.next.next) || null
    return ans.next
};

