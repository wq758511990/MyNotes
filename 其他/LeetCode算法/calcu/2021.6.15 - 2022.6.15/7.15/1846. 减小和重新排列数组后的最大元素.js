/**
 * @param {number[]} arr
 * @return {number}
 */
 var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    for (let i = 1; i < n; ++i) {
        arr[i] = Math.min(arr[i], arr[i - 1] + 1);
    }
    return arr[n - 1];
};

console.log(maximumElementAfterDecrementingAndRearranging([2,2,1,2,1]))