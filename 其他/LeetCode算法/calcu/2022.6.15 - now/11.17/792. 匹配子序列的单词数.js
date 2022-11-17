/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const p = new Array(26).fill(0).map(() => []);
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const c = word[0];
    const idx = getCharIdx(c);
    p[idx].push([i, 0]);
  }

  for (let c of s) {
    const idx = getCharIdx(c);
    let len = p[idx].length;
    while (len) {
      const t = p[idx].shift();
      if (words[t[0]].length - 1 === t[1]) {
        res++;
      } else {
        ++t[1];
        const newIdx = getCharIdx(words[t[0]][t[1]]);
        p[newIdx].push(t);
      }
      len--
    }
  }
  return res;
};

const getCharIdx = (c) => {
  return c.charCodeAt() - "a".charCodeAt();
};

console.log(
  numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])
);
