const reverseList = (head) => {
  let prev = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

const endOfFirstHalf = (head) => {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var isPalindrome = function (head) {
  //   let ans = "";
  //   while (head) {
  //     ans += head.val;
  //     head = head.next;
  //   }
  //   for (let i = 0, j = ans.length - 1; i < j; i++, j--) {
  //     if (ans[i] !== ans[j]) {
  //       return false;
  //     }
  //   }
  //   return true;

  if (!head) return true;
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalf = reverseList(firstHalfEnd.next);
  let p1 = head;
  let p2 = secondHalf;
  let res = true;
  while (res && p2) {
    if (p1.val !== p2.val) res = false;
    p1 = p1.next;
    p2 = p2.next;
  }
  return res;
};
