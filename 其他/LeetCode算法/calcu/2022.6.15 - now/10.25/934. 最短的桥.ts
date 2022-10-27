function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const island: any[] = [];
  const queue: any[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = -1;
        queue.push([i, j]);
        while (queue.length) {
          const cell = queue.pop();
          island.push(cell);
          const [oi, oj] = cell;
          for (let direction of dirs) {
            const [x, y] = direction;
            let ni = oi + x;
            let nj = oj + y;
            if (ni >= 0 && nj >= 0 && ni < n && nj < n && grid[ni][nj] === 1) {
              queue.push([ni, nj]);
              grid[ni][nj] = -1;
            }
          }
        }
        for (const cell of island) {
          queue.push(cell);
        }
        let step = 0;
        while (queue.length) {
          const sz = queue.length;
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift();
            const [oi, oj] = cell;
            for (let direction of dirs) {
              const [x, y] = direction;
              let ni = oi + x;
              let nj = oj + y;
              if (ni >= 0 && nj >= 0 && ni < n && nj < n) {
                if (grid[ni][nj] === 0) {
                  queue.push([ni, nj]);
                  grid[ni][nj] = -1;
                } else if (grid[ni][nj] === 1) {
                  return step;
                }
              }
            }
          }
          step++;
        }
      }
    }
  }
  return 0;
}

console.log(
  shortestBridge([
    [0, 1],
    [1, 0],
  ])
);

const ans: number[] = [];
const newAns: number[] = [];
console.time("push");
for (let i = 0; i < 10 * 10000; i++) {
  ans.push(i);
}
console.timeEnd("push");
console.time("shift");
for (let i = 0; i < 10 * 10000; i++) {
  newAns.unshift(i);
}
console.timeEnd("shift");
