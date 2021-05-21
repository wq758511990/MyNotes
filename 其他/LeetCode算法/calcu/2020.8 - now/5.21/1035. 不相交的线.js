var maxUncrossedLines = function (A, B) {
  let hashMap = new Map()
  for (let i = 0; i < B.length; i++) {
    let n = B[i]
    if (hashMap.has(n)) {
      hashMap.get(n).unshift(i)
    }
    else {
      hashMap.set(n, [i])
    }
  }
  let arr = []
  for (let i = 0; i < A.length; i++) {
    let n = A[i]
    if (hashMap.has(n)) {
      arr = arr.concat(hashMap.get(n))
    }
  }
  let dp = new Array(arr.length).fill(1)
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp.length ? Math.max(...dp) : 0

};