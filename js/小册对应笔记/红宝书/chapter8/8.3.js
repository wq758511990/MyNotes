// function SuperType () {
//   this.colors = ["red", "blue", "green"];
// }
// function SubType () { }
// // 继承 SuperType 
// SubType.prototype = new SuperType();
// let instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black" 
// let instance2 = new SubType();
// console.log(instance2.colors); // "red,blue,green,black"

function SuperType () {
  this.colors = ["red", "blue", "green"];
}
function SubType () {
  // 继承 SuperType 
  SuperType.call(this);
}
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black" 
let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green"
