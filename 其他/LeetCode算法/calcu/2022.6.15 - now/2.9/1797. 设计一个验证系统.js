/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.authMap = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.authMap.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  const preActiveTime = this.authMap.get(tokenId);
  if (!preActiveTime || preActiveTime <= currentTime) return;
  this.authMap.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  for (const [k, v] of this.authMap) {
    if (v <= currentTime) {
      this.authMap.delete(k);
    }
  }
  return this.authMap.size;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

function Ele() {}

Ele.prototype.sayHi = function () {
  console.log("hi");
};

function Btn() {}

Btn.prototype = Object.create(Ele.prototype);
Btn.prototype.constructor = Btn;

Btn.prototype.sayHi = function () {
  console.log("hoo");
};

const btn = new Btn();
Object.getPrototypeOf(btn).sayHi()

