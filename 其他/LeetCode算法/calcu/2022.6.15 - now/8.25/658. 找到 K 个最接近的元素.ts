function findClosestElements(arr: number[], k: number, x: number): number[] {
  const n = arr.length;
  let deletedTimes = n - k;
  while (deletedTimes--) {
    const curLength = arr.length;
    const leftDis = Math.abs(arr[0] - x);
    const rightDis = Math.abs(arr[curLength - 1] - x);
    if (leftDis > rightDis) {
      arr.shift();
    } else {
      arr.pop();
    }
  }
  return arr;
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
