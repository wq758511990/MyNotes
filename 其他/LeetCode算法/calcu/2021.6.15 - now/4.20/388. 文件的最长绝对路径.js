var lengthLongestPath = function (input) {
  const n = input.length;
  let pos = 0;
  let ans = 0;
  const level = new Array(n + 1).fill(0);

  while (pos < n) {
    /* 检测当前文件的深度 */
    let depth = 1;
    while (pos < n && input[pos] === '\t') {
      pos++;
      depth++;
    }
    /* 统计当前文件名的长度 */
    let len = 0;
    let isFile = false;
    while (pos < n && input[pos] !== '\n') {
      if (input[pos] === '.') {
        isFile = true;
      }
      len++;
      pos++;
    }
    /* 跳过换行符 */
    pos++;

    if (depth > 1) {
      len += level[depth - 1] + 1;
    }
    if (isFile) {
      ans = Math.max(ans, len);
    } else {
      level[depth] = len;
    }
  }
  return ans;
}