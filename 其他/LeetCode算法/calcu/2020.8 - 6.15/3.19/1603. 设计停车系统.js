/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big
  this.medium = medium
  this.small = small
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  const countDict = {
    1: 'big',
    2: 'medium',
    3: 'small'
  }
  if (this[countDict[carType]] === 0) {
    return false
  }
  this[countDict[carType]]--
  return true
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

var obj = new ParkingSystem(1, 1, 0)
console.log(obj.addCar(1))
console.log(obj.addCar(2))
console.log(obj.addCar(3))
console.log(obj.addCar(1))