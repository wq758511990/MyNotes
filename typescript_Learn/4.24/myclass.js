// 类

class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom


// 静态方法
// 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

class Animal_1 {
    static isAnimal(n) {
        return n instanceof Animal
    }
    static isCat(n) {
        return n instanceof Cat
    }
}
console.log(Animal_1.isAnimal(c)) // a 和 c 都属于Animal类

class Animal_2 {
    constructor(name) {
        this.name = name
    }
    
    get name() {
        return this.name
    }

    set name(value) {
        console.log("setter:" + value)
        this.name = value
    }
}