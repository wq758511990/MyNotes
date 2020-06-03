function Person(name) {
    this.name = name
}

var person = new Person('xiaowang')

// (1) 创建一个新对象；
// (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
// (3) 执行构造函数中的代码（为这个新对象添加属性）；
// (4) 返回新对象。
console.log(person instanceof Object)
console.log(person instanceof Person)


// 通过使用原型模式来解决。
function Person1(name) {
    Person1.prototype.name = name
    Person1.prototype.sayName = function () {
        console.log('owwwwwwwwwwwwwww')
    }
}
person1 = new Person1('laoli')
console.log(person1.name)
console.log(person1.__proto__) // Person1 { name: 'laoli', sayName: [Function] }
console.log(person1.constructor) // [Function: Person1]
console.log(Object.getPrototypeOf(person1)) // Person1 { name: 'laoli', sayName: [Function] }
person1.sayName()


// 虽然可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值。
// 如果我们在实例中添加了一个属性，而该属性与实例原型中的一个属性同名，那我们就在实例中创建该属性，该
// 属性将会屏蔽原型中的那个属性。


// 6.2.4 组合使用构造函数模式和原型模式
function Person(name) {
    this.name = name
    this.friends = ['1', '2']
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

person1 = new Person('xiaowang')
person2 = new Person('xiaoli')
person1.friends.push('3')
console.log(person1.friends) // 1, 2, 3
console.log(person2.friends) // 1, 2


// 6.2.5动态原型模式

function Person3(name, age, job) {
    //属性
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayName != "function") {
        Person3.prototype.sayName = function () {
            console.log(this.name);
        };
    }
}

person3 = new Person3('xiaox', 14, 'programmer')
person3.sayName()