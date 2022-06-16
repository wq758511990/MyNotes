/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false
    }
    const dict = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const ans = []
    for (let ch of s) {
        if (ch in dict) {
            ans.push(ch)
        } else {
            if (ch !== dict[ans.pop()]) {
                return false
            }
        }
    }
    return !ans.length
};