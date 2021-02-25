/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // const ansArr = []
  // const nodes = []
  // while (head) {
  //   ansArr.push(head.val)
  //   head = head.next
  // }
  // ansArr.sort((a, b) => a - b)
  // for (var i = 0; i < ansArr.length; i++) {
  //   const node = new ListNode(ansArr[i])
  //   nodes.push(node)
  // }
  // for (var i = 0; i < nodes.length - 1; i++) {
  //   nodes[i].next = nodes[i + 1]
  // }
  // return nodes[0]
  const small = new ListNode(null)
  const smallHead = small
  const large = new ListNode(null)
  const largeHead = large

  while (head) {
    if (head.val < x) {
      small.next = head
    } else {
      large.next = head
    }
    head = head.next
  }
  large.next = null
  small.next = largeHead.next
  return smallHead.next
};