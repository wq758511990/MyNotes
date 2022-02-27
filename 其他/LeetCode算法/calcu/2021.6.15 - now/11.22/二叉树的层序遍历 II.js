var levelOrderBottom = function (root) {
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const root = queue.shift();
    ans.push(root.val);
    if (root.left) queue.push(root.left);
    if (root.right) queue.push(root.right);
  }
  return ans;
};
