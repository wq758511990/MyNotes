/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = new ListNode(0);
list1.next = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const list2 = new ListNode(1000000);
list2.next = {
  val: 1000001,
  next: {
    val: 1000002,
    next: null,
  },
};

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let head = list1;
  let cnt = 0;
  while (cnt < a - 1) {
    list1 = list1.next;
    cnt++;
  }
  let leftNode = list1;
  while (cnt <= b) {
    list1 = list1.next;
    cnt++;
  }

  leftNode.next = list2;

  while (list2?.next) {
    list2 = list2.next;
  }
  list2.next = list1;
  while (head) {
    console.log("val", head.val);
    head = head.next;
  }
  return head;
};

console.log(mergeInBetween(list1, 3, 4, list2));
