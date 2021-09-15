/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function build(s) {
    const ans = [];
    for (let c of s) {
      if (c !== "#") {
        ans.push(c);
      } else {
        ans.pop();
      }
    }
    return ans.join("");
  }
  return build(s) === build(t);
};

console.log(backspaceCompare("ab##", "c#d#"));
