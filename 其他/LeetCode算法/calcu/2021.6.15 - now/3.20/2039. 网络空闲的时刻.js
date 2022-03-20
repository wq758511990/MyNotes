/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  const n = patience.length, graph = new Map()
  for (const edge of edges) {
    var l1, l2
    if (graph.has(edge[0]))
      l1 = graph.get(edge[0])
    else
      l1 = new Array()
    l1.push(edge[1])
    graph.set(edge[0], l1)
    if (graph.has(edge[1]))
      l2 = graph.get(edge[1])
    else
      l2 = new Array()
    l2.push(edge[0])
    graph.set(edge[1], l2)
  }
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  distance[0] = 0
  let queue = [0], cost = 0
  while (queue.length > 0) {
    cost += 1
    next = new Array()
    for (const server of queue)
      for (const other of graph.get(server))
        if (distance[other] == Number.MAX_SAFE_INTEGER) {
          distance[other] = cost
          next.push(other)
        }
    queue = next
  }
  let ans = 0
  for (let i = 1; i < n; i++) {
    const d = distance[i] * 2, p = patience[i]
    ans = Math.max(ans, Math.floor((d - 1) / p) * p + d)
  }
  return ans + 1
};