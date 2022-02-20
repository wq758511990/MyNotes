var AnimalShelf = function () {
  this.catDeque = []
  this.dogDeque = []
};

/** 
* @param {number[]} animal
* @return {void}
*/
AnimalShelf.prototype.enqueue = function (animal) {
  if (animal[1] === 0) {
    this.catDeque.push(animal)
  } else {
    this.dogDeque.push(animal)
  }
};

/**
* @return {number[]}
*/
AnimalShelf.prototype.dequeueAny = function () {
  const dogLength = this.dogDeque.length
  const catLength = this.catDeque.length
  if (!catLength) {
    return this.dequeueDog()
  }
  if (!dogLength) {
    return this.dequeueCat()
  }
  if (this.catDeque[0][0] < this.dogDeque[0][0]) {
    return this.dequeueCat()
  } else {
    return this.dequeueDog()
  }
  return [-1, -1]
};

/**
* @return {number[]}
*/
AnimalShelf.prototype.dequeueDog = function () {
  if (this.dogDeque.length) {
    return this.dogDeque.shift()
  } else {
    return [-1, -1]
  }
};

/**
* @return {number[]}
*/
AnimalShelf.prototype.dequeueCat = function () {
  if (this.catDeque.length) {
    return this.catDeque.shift()
  } else {
    return [-1, -1]
  }
};

/**
* Your AnimalShelf object will be instantiated and called as such:
* var obj = new AnimalShelf()
* obj.enqueue(animal)
* var param_2 = obj.dequeueAny()
* var param_3 = obj.dequeueDog()
* var param_4 = obj.dequeueCat()
*/