var findAndReplacePattern = function(words, pattern) {
  const ans = [];
  for (const word of words) {
      if (match(word, pattern) && match(pattern, word)) {
          ans.push(word);
      }
  }
  return ans;
};

const match = (word, pattern) => {
  const map = new Map();
  for (let i = 0; i < word.length; ++i) {
      const x = word[i], y = pattern[i];
      if (!map.has(x)) {
          map.set(x, y);
      } else if (map.get(x) !== y) { // word 中的同一字母必须映射到 pattern 中的同一字母上
          return false;
      }
  }
  return true;
}