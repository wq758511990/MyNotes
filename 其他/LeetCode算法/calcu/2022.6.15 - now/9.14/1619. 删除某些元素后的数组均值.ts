var trimMean = function(arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    let partialSum = 0;
    for (let i = n / 20; i < 19 * n / 20; i++) {
        partialSum += arr[i];
    }
    return partialSum / (n * 0.9);
};


console.log(
  trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
);
