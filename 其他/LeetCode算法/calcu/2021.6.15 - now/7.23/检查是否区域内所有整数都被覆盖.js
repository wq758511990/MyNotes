/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
    const positions = []
    for (let i = 0; i < ranges.length; i++) {
        let tmp = ranges[i]
        for (let j = tmp[0]; j <= tmp[1]; j++) {
            positions[j] = 1
        }
    }
    for (let k = left; k <= right; k++) {
        if (!positions[k]) {
            return false
        }
    }
    return true
};

console.log(isCovered([[1,2],[3,4],[5,6]], 2, 5))