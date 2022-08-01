function generateTheString(n: number): string {
  //   let overTimes = 0;
  //   let ans = "";
  //   for (let i = 0; i < n; i++) {
  //     if (i >= 25) {
  //       overTimes = 1;
  //     }
  //     const targetIndex = i % 25;
  //     const sourceStr = String.fromCharCode(97 + targetIndex);
  //     const concatedStr = overTimes > 0 ? sourceStr.repeat(2) : sourceStr;
  //     if (overTimes) {
  //       i++;
  //     }
  //     ans = (ans + concatedStr).length > n ? ans + "z" : ans + concatedStr;
  //   }
  //   return ans;
  return n & 1 ? "a".repeat(n) : "a".repeat(n - 1) + "b";
}

console.log(generateTheString(78));
