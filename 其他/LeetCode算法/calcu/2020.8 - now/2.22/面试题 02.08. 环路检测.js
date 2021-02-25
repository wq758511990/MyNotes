/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // let nodeSet = new Set()
  // while(head) {
  //   if(nodeSet.has(head)) {
  //     return head
  //   }
  //   nodeSet.add(head)
  // }
  // return null
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let p = head
      while (slow !== p) {
        slow = slow.next
        p = p.next
      }
      return slow
    }
  }
  return null
};
