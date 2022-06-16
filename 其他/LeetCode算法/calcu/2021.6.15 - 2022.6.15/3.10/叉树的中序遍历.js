var preorder = function (root) {
  const res = [];
  helper(root, res);
  return res;
}

const helper = (root, res) => {
  if (root === null) {
    return;
  }
  res.push(root.val);
  for (const ch of root.children) {
    helper(ch, res);
  }
};