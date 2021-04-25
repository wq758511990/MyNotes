/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
  this.map = new Map()
  for (let key of book) {
    if (this.map.has(key)) {
      this.map.set(key, this.map.get(key) + 1)
    } else {
      this.map.set(key, 1)
    }
  }
};

/** 
* @param {string} word
* @return {number}
*/
WordsFrequency.prototype.get = function (word) {
  return this.map.get(word) || 0
};