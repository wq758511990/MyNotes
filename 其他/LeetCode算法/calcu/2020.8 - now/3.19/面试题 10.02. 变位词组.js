/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const arrDict = {}
  for (var str of strs) {
    const sortedStr = str.split('').sort().join('')
    sortedStr in arrDict ? arrDict[sortedStr].push(str) : arrDict[sortedStr] = [str]
  }
  return Object.values(arrDict)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"],))