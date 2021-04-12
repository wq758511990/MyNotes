// function test (i) {
//   setTimeout(() => {
//     console.log(i)
//   });
// }

// for (var i = 0; i < 6; i++) {
//   // setTimeout(() => {
//   //   console.log(i)
//   // });
//   test(i)
// }

const Person = {
  isHuman: true,
  printSomething: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}

const me = Object.create(Person)
me.name = 'testName'
console.log(me)
me.printSomething()