var SortedStack = function () {
  this.stack = []
  this.subStack = []
};

/** 
* @param {number} val
* @return {void}
*/
SortedStack.prototype.push = function (val) {
  while (!this.isEmpty() && val > this.peek()) {
    this.subStack.push(this.stack.pop())
  }
  this.stack.push(val)
  while (this.subStack.length) {
    this.stack.push(this.subStack.pop())
  }
};

/**
* @return {void}
*/
SortedStack.prototype.pop = function () {
  this.stack.pop()
};

/**
* @return {number}
*/
SortedStack.prototype.peek = function () {
  return this.stack[this.stack.length - 1] || -1
};

/**
* @return {boolean}
*/
SortedStack.prototype.isEmpty = function () {
  return this.stack.length === 0
};

/**
* Your SortedStack object will be instantiated and called as such:
* var obj = new SortedStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.isEmpty()
*/