var reverseBits = function (n) {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    rev |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return rev >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100));
