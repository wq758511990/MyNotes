var partition = function (s) {};

function isParlidom(s) {
  const n = s.length;
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

console.log(partition("aab"));
