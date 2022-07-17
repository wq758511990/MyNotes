function oddCells(m: number, n: number, indices: number[][]): number {
  let ans = 0;
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (const indicy of indices) {
    const ri = indicy[0];
    const ci = indicy[1];
    let r = 0,
      l = 0;
    while (l < n) {
      matrix[ri][l] += 1;
      if (matrix[ri][l] & 1) {
        ans++;
      } else {
        ans--;
      }
      l++;
    }
    while (r < m) {
      matrix[r][ci] += 1;
      if (matrix[r][ci] & 1) {
        ans++;
      } else {
        ans--;
      }
      r++;
    }
  }
  return ans;
}

function oddCells1(m: number, n: number, indices: number[][]): number {
  let ans = 0;
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (const indicy of indices) {
    for (let i = 0; i < n; i++) {
      matrix[indicy[0]][i]++;
      if (matrix[indicy[0]][i] & 1) {
        ans++;
      } else {
        ans--;
      }
    }
    for (let i = 0; i < m; i++) {
      matrix[i][indicy[1]]++;
      if (matrix[i][indicy[1]] & 1) {
        ans++;
      } else {
        ans--;
      }
    }
  }
  return ans;
}

console.log(
    oddCells1(2, 2, [
    [1, 1],
    [0, 0],
  ])
);


