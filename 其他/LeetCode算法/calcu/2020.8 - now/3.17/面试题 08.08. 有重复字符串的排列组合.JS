/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const arr = S.split('').sort()
  const ans = []
  function dfs (track, store) {
    if (store.length === 0) {
      ans.push(track.join(''))
    }
    for (var i = 0; i < store.length; i++) {
      if (store[i] === store[i + 1]) {
        continue
      }
      track.push(store[i])
      dfs(track, store.filter((_, idx) => idx !== i))
      track.pop()
    }
  }
  dfs([], arr)
  return ans
};

console.log(permutation('qee'))