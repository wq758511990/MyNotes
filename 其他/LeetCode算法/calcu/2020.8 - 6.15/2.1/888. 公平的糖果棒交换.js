var fairCandySwap = function (A, B) {
  const sumA = A.reduce((a, b) => a + b)
  const sumB = B.reduce((a, b) => a + b)
  const delta = (sumA - sumB) / 2
  // const flag = sumA >= sumB
  // for (let i = 0; i < A.length; i++) {
  //   for (let j = 0; j < B.length; j++) {
  //     if (flag) {
  //       if (A[i] - B[j] === difference) {
  //         return [A[i], B[j]]
  //       }
  //     } else {
  //       if (B[j] - A[i] === difference) {
  //         return [A[i], B[j]]
  //       }
  //     }
  //   }
  // }
  let ans = []
  const setA = new Set(A)
  for (const y of B) {
    const x = y + delta
    if (setA.has(x)) {
      ans = [x, y]
      break
    }
  }
  return ans
}

console.log(fairCandySwap([1, 2, 5], [2, 4]))
