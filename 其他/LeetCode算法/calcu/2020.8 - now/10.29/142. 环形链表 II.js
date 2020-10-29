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
  let fastNode = head.next.next,
    slowNode = head.next;
  let hasCycle = false;
  while (fastNode && slowNode) {
    if (fastNode !== slowNode) {
      fastNode = fastNode.next.next;
      slowNode = slowNode.next;
    } else {
      hasCycle = true;
      break;
    }
  }
  if (hasCycle) {
    let q = head;
    while (q !== fastNode) {
      q = q.next;
      fastNode = fastNode.next;
    }
    return q;
  } else {
    return null;
  }
};
