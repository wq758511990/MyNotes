var kthSmallest = function (root, k) {
  const stack = [];
  while (root != null || stack.length) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    --k;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
};