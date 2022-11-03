function maxRepeating(sequence: string, word: string): number {
  const step = word.length;
  const n = sequence.length;
  let maxCnt = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let startIdx = sequence.indexOf(word, i);
    if (startIdx === -1) return maxCnt;
    while (startIdx !== -1 && startIdx + step <= n) {
      while (sequence.slice(startIdx, startIdx + step) === word) {
        startIdx += step;
        cnt++;
      }
      maxCnt = Math.max(maxCnt, cnt);
      cnt = 0;
      startIdx = sequence.indexOf(word, startIdx);
    }
  }
  return maxCnt;
}

console.log(maxRepeating("ababc", "ab"));
