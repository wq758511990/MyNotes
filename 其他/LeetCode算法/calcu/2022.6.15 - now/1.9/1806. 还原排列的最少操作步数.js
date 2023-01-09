/**
 * @param {number} n
 * @return {number}
 */

var reinitializePermutation = function (n) {
  let perm = [];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    perm.push(i);
  }
  const arr = new Array(n).fill(0);

  const isInitialArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i) return false;
    }
    return true;
  };
  const loopArr = () => {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2];
      }
    }
    cnt++;
    perm = arr.map((i) => i);
  };
  loopArr();
  while (!isInitialArr(arr)) {
    loopArr();
  }
  return cnt
};

console.log(reinitializePermutation(8));
