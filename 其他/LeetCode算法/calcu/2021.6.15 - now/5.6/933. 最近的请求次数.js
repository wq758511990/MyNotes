var RecentCounter = function () {
  this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t)
  const l = t - 3000
  while (this.requests.length && l > this.requests[0]) {
    this.requests.shift()
  }
  return this.requests
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */