function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0]?.length || 0;
  let step = k % (m * n);
  const sourceArr = grid.flat();
  const ans = [];
  while (step--) {
    sourceArr.unshift(sourceArr.pop() as number);
  }
  console.log('sourceArr', sourceArr)
  for (let i = 0; i < m; i++) {
    // @ts-ignore
    ans.push(sourceArr.slice(i * n, i * n + n));
  }
  return ans;
}

console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23));
