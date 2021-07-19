/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let fNode = head
    let lNode = head
    while(fNode && fNode.next) {
        fNode = fNode.next && fNode.next.next
        lNode = lNode.next
    }
    return lNode
};
console.log(middleNode())