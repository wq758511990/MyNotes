/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  // let length = 0
  // let cur = 0
  // let node = head
  // while(head) {
  //     length++
  //     head = head.next
  // }
  // while(node) {
  //     cur++
  //     if (cur === length - k) return node
  //     node = node.next
  // }

  let prevNode = head
  let aftNode = head
  while (k--) {
    aftNode = aftNode.next
  }
  while (aftNode) {
    prevNode = prevNode.next
    aftNode = aftNode.next
  }
  return prevNode
}
