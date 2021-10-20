// 输入：head = [1,4,3,2,5,2], x = 3
// 输出：[1,2,2,4,3,5]

var partition = function (head, x) {
  const pre = new ListNode(0);
  const firstHalf = new ListNode(0);
  const secondHalf = new ListNode(0);
  const ans = new ListNode(0);
  ans.next = firstHalf;
  secondHalf.next = pre;
  pre.next = head;
  while (pre && pre.next) {
    if (pre.next.val < x) {
      firstHalf.next = pre.next;
      pre.next = pre.next.next;
    }
  }
  firstHalf.next = secondHalf.next;
  return ans;
};
