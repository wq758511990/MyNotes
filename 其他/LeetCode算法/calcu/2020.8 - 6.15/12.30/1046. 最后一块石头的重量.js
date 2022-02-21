/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // const length = stones.length - 1
  // for (let i = 0; i < length; i++) {
  //   stones.sort((a, b) => a - b)
  //   console.log(stones)
  //   if (stones[length] === 0) break
  //   stones[length] -= stones[length - 1]
  //   stones[length - 1] = 0
  // }
  // return stones[length]

  const pq = new MaxPriorityQueue();
  for (const stone of stones) {
    pq.enqueue('x', stone);
  }

  while (pq.size() > 1) {
    const a = pq.dequeue()['priority'];
    const b = pq.dequeue()['priority'];
    if (a > b) {
      pq.enqueue('x', a - b);
    }
  }
  return pq.isEmpty() ? 0 : pq.dequeue()['priority'];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1, 1]))