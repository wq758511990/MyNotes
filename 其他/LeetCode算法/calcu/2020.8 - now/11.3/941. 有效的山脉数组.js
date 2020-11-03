/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  //   const length = A.length;
  //   let changeCount = 0;
  //   if (length < 3) return false;
  //   if (A[0] >= A[1]) return false;
  //   for (let i = 1; i < length; i++) {
  //     if (A[i] > A[i - 1]) {
  //       if (changeCount) {
  //         return false;
  //       } else {
  //         continue;
  //       }
  //     } else if (A[i] === A[i - 1]) {
  //       return false;
  //     } else {
  //       if (!changeCount) changeCount++;
  //     }
  //   }
  //   return changeCount ? true : false;
  const length = A.length;
  if (length < 3) return false;
  let i = 0;
  while (A[i] < A[i + 1] && i + 1 < length) i++;
  if (i === 0 || i === length - 1) return false;
  while (A[i] > A[i + 1] && i + 1 < length) i++;
  return i === length - 1;
};

console.log(validMountainArray([0, 3, 2, 1]));
