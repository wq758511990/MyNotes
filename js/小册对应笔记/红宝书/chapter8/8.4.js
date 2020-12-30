// // 与函数表达式类似，类表达式在它们被求值前也不能引用。不过，与函数定义不同的是，虽然函数
// // 声明可以提升，但类定义不能：

// console.log(FunctionExpression); // undefined 
// var FunctionExpression = function () { };
// console.log(FunctionExpression); // function() {} 
// console.log(FunctionDeclaration); // FunctionDeclaration() {} 
// function FunctionDeclaration () { }
// console.log(FunctionDeclaration); // FunctionDeclaration() {} 
// console.log(ClassExpression); // undefined 
// var ClassExpression = class { };
// console.log(ClassExpression); // class {} 
// console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined 
// class ClassDeclaration { }
// console.log(ClassDeclaration); // class ClassDeclaration {} 


// // 另一个跟函数声明不同的地方是，函数受函数作用域限制，而类受块作用域限制：
// {
//   function FunctionDeclaration () { }
//   class ClassDeclaration { }
// }
// console.log(FunctionDeclaration); // FunctionDeclaration() {} 
// console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined

class Person {
  constructor() {
    this.age = 25
    this.locate = () => { console.log('instance', this) }
  }
  locate () {
    console.log('prototype', this)
  }
  static locate () {
    console.log('class', this)
  }
}

let p = new Person()
p.locate()
Person.prototype.locate()
Person.locate()

console.log('================ extends =============')
class Student extends Person {
  constructor() {
    super()
    console.log('new.target', new.target)
    console.log(this instanceof Person)
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.name = 'xxx'
  }
}

let st1 = new Student()
console.log(st1.age)


a1 = [1, 2, 3, 4, 5]
a2 = a1.filter(x => x % 2)
console.log(a2)