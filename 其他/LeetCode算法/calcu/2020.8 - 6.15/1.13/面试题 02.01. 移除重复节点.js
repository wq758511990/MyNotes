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
var removeDuplicateNodes = function (head) {
  if (!head) {
    return head
  }
  let tmpArr = [head.val]
  let preNode = new ListNode(0)
  preNode.next = head
  while (head.next) {
    if (tmpArr.indexOf(head.next.val) === -1) {
      tmpArr.push(head.next.val)
      head = head.next
    } else {
      head.next = head.next.next
    }
  }
  return preNode.next
}

var removeDuplicateNodes = function (head) {
  if (!head) {
    return head
  }
  let tmpDict = {}
  tmpDict[head.val] = 1
  let preNode = new ListNode(0)
  preNode.next = head
  while (head.next) {
    if (!tmpDict[head.next.val]) {
      tmpDict[head.next.val] = 1
      head = head.next
    } else {
      head.next = head.next.next
    }
  }
  return preNode.next
}

console.log(removeDuplicateNodes([1, 2, 3, 3, 2, 1]))
