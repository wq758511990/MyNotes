var CQ = function() {
  this.a = 'b'
}

CQ.prototype.getA = function() {
  return this.a
}

var obj = new CQ()
console.log(obj.getA())