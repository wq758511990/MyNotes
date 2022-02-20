var Operations = function () {

};

/** 
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */
Operations.prototype.minus = function (a, b) {
  return a + (-b)
};

/** 
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */
Operations.prototype.multiply = function (a, b) {
  let counts = Math.abs(b)
  for (let i = 0; i < counts; i++) {
    a += a
  }
  return b > 0 ? a : -a
};

/** 
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */
Operations.prototype.divide = function (a, b) {
  let counts = 0
  let low = 0
  if (a < 0) low++
  if (b < 0) low++
  let absA = Math.abs(a)
  let absB = Math.abs(b)
  while (absA > absB) {
    absA -= absB
    counts += 1
  }
  return low === 1 ? -counts : counts
};

/**
 * Your Operations object will be instantiated and called as such:
 * var obj = new Operations()
 * var param_1 = obj.minus(a,b)
 * var param_2 = obj.multiply(a,b)
 * var param_3 = obj.divide(a,b)
 */

let a = -1
let prev = a
for (let i = 0; i < 2147483647; i++) {
  a += prev
}
console.log('a', a)