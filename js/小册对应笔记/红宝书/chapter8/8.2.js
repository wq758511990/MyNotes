function Person () {
  this.name = 'wzx'
  this.age = 23
  this.colors = []
}
Person.prototype.gender = 'man'
Person.prototype.protoColors = []

let person1 = new Person()
let person2 = new Person()

// Person原型对象的constructor 指向Person
console.log(Person.prototype.constructor === Person)
// 实例对象的__proto__ 指向原型对象
console.log(person1.__proto__ === Person.prototype)
console.log(person2.__proto__ === Person.prototype)

console.log(person1.hasOwnProperty('gender')) // gender这个属性存在于原型对象上

// in 操作符会在可以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上。
console.log('gender' in person1) // true 虽然person1自身没有gender，但是可以在原型对象上拿到这个属性

// person1.gender = 'woman'
// console.log(person2.gender)  // man
// console.log(person1.gender)  // woman

// person1.colors.push('black')
// console.log(person2.colors) // []
// console.log(person1.colors) // ['black']

person1.protoColors.push('white')
console.log(person2.protoColors) // white
console.log(person1.protoColors) // white
