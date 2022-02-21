var kthLargestValue = function (matrix, k) {
  const m = matrix.length, n = matrix[0].length;
  const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const results = [];
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      pre[i][j] = pre[i - 1][j] ^ pre[i][j - 1] ^ pre[i - 1][j - 1] ^ matrix[i - 1][j - 1];
      results.push(pre[i][j]);
    }
  }
  nthElement(results, 0, k - 1, results.length - 1);
  return results[k - 1];
}

const nthElement = (results, left, kth, right) => {
  if (left === right) {
    return;
  }
  const pivot = parseInt(Math.random() * (right - left) + left);
  swap(results, pivot, right);
  // 三路划分（three-way partition）
  let sepl = left - 1, sepr = left - 1;
  for (let i = left; i <= right; i++) {
    if (results[i] > results[right]) {
      swap(results, ++sepr, i);
      swap(results, ++sepl, sepr);
    } else if (results[i] === results[right]) {
      swap(results, ++sepr, i);
    }
  }
  if (sepl < left + kth && left + kth <= sepr) {
    return;
  } else if (left + kth <= sepl) {
    nthElement(results, left, kth, sepl);
  } else {
    nthElement(results, sepr + 1, kth - (sepr - left + 1), right);
  }
}

const swap = (results, index1, index2) => {
  const temp = results[index1];
  results[index1] = results[index2];
  results[index2] = temp;
}