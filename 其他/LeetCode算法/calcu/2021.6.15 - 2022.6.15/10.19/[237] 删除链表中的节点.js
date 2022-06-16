var deleteNode = function (head, node) {
  while (head) {
    if (head.next && head.next.val === node.val) {
      head.next = head.next.next;
    }
  }
};

console.log(deleteNode(node));
