/**
 * @param {string} s
 * @return {string}
 */
function reverseStr(str) {
    return str.split('').reverse().join('')
}
 var reverseWords = function(s) {
    const arr = s.split(' ')
    for (let key in arr) {
        arr[key] = reverseStr(arr[key])
    }
    return arr.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))