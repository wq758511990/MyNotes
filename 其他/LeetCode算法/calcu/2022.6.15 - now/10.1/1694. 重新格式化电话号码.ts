function reformatNumber(number: string): string {
  let pre = "";
  let ans = "";
  let idx = 0;
  for (let c of number) {
    if (c !== " " && c !== "-") {
      pre += c;
    }
  }
  const length = pre.length - 1;
  while (idx < length) {
    if (length - idx > 3) {
      ans += pre.substring(idx, idx + 3) + '-';
      idx += 3;
    } else {
      if (length - idx === 3) {
        // 剩余四位
        ans += pre.substring(idx, idx + 2) + '-';
        idx += 2;
      }
      if (length - idx === 2) {
        // 剩余三位
        ans += pre.substring(idx, idx + 3);
        idx += 3;
      }
      if (length - idx === 1) {
        // 剩余四位
        ans += pre.substring(idx, idx + 2);
        idx += 2;
      }
    }
  }
  return ans;
}

console.log(reformatNumber("--25 3 2"));
