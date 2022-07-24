/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  let myStart = Math.min(start, destination)
  let myEnd = Math.max(start, destination)
  const sum = distance.reduce((a, b) => a + b);
  let positiveSum = 0;
  for (let i = myStart; i < myEnd; i++) {
    positiveSum += distance[i];
  }
  return positiveSum > Math.floor(sum / 2) ? sum - positiveSum : positiveSum;
}

console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));
