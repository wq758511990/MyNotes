function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  if (k === 0) return new Array(n).fill(0);
  const res = new Array(n).fill(0);
  const newCode: number[] = new Array(n * 2).fill(0).map((_, idx: number) => {
    return code[idx % n];
  });
  let l = k > 0 ? 1 : n + k;
  let r = k > 0 ? k : n - 1;
  let w = 0;
  for (let i = l; i <= r; i++) {
    w += newCode[i];
  }
  for (let i = 0; i < n; i++) {
    res[i] = w;
    w -= newCode[l];
    w += newCode[r + 1];
    l++;
    r++;
  }
  return res;
}

console.log(decrypt([5, 7, 1, 4], 3));
