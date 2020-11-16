/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) return head
  if (head.val === val) return head.next
  let prevHead = head
  while (head) {
    if (head.next && head.next.val === val) {
      head.next = head.next.next
      break
    }
    head = head.next
  }
  return prevHead
}
