/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length - 1
    while(l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid
        }else if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
            r = mid
        } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            l = mid + 1
        }
    }
    return l
};

console.log(peakIndexInMountainArray([0,1,0]))