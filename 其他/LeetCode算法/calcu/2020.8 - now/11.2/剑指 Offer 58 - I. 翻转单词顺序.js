/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let resArr = [];
  s.split(" ").forEach((item) => {
    if (item !== "") {
      resArr.splice(0, 0, item);
    }
  });
  return resArr.join(" ");
};

console.log(reverseWords("  hello world!  "));
