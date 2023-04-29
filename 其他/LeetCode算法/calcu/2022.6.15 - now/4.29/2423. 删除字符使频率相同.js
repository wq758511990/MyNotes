/**
 * @param {string} word
 * @return {boolean}
 */
 var equalFrequency = function(word) {
    let charCount = new Array(26).fill(0);
    for (let c of word) {
        charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let freqCount = new Map();
    for (let c of charCount) {
        if (c > 0) {
            freqCount.set(c, (freqCount.get(c) || 0) + 1);
        }
    }
    for (let c of charCount) {
        if (c == 0) {
            continue;
        }
        freqCount.set(c, freqCount.get(c) - 1);
        if (freqCount.get(c) == 0) {
            freqCount.delete(c);
        }
        if (c - 1 > 0) {
            freqCount.set(c - 1, (freqCount.get(c - 1) || 0) + 1);
        }
        if (freqCount.size == 1) {
            return true;
        }
        if (c - 1 > 0) {
            freqCount.set(c - 1, freqCount.get(c - 1) - 1);
            if (freqCount.get(c - 1) == 0) {
            freqCount.delete(c - 1);
            }
        }
        freqCount.set(c, (freqCount.get(c) || 0) + 1);
    }
    return false;
};
console.log(equalFrequency("mfimtyphrkeddimlglkt"));
