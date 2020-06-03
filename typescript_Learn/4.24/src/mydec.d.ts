declare var myd_1: number

// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let

// 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现5：
declare const jQuery: (selector: string) => any

// jQuery 其实就是一个函数，所以也可以用 function 来定义：
declare function jQuery1(selector: string): any;

// 在函数类型的声明语句中，函数重载也是支持的6：


// 当全局变量是一个类的时候，我们用 declare class 来定义它的类型7：
declare class myAnimal {
    name: string;
    age: number;
    [propName: string]: any;
    // sayHi(name: string): string { // 不能在环境上下文中声明实现
    //     return `sayHi`
    // }
    sayHi(name: string): string
}

// 使用 declare enum 定义的枚举类型也称作外部枚举（Ambient Enums），举例如下8：
// 与其他全局变量的类型声明一致，declare enum 仅用来定义类型，而不是具体的值
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

// declare namespace
// namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。

declare namespace Jquery {
    function ajax(url: string, settings?: any): void
}

// 注意，在 declare namespace 内部，我们直接使用 function ajax 来声明函数，
// 而不是使用 declare function ajax。类似的，也可以使用 const, class, enum 等语句9：

declare namespace jQuery_2 {
    function ajax(url: string, settings?:any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }
}

// 在类型声明文件中，我们可以直接使用 interface 或 type 来声明一个全局的接口或类型12：
interface AjaxSettings {
    method?: 'GET' | 'POST';
    data?: any
}

declare namespace jQuery_3 {
    function ajax(url: string, setting?: any): void
}

// 暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 namespace
declare namespace jQuery_4 {
    interface AjaxSettings {
        method?: 'GET' | 'POST';
        data?: any
    }
    function ajax(url: string, setting?: any): void
}

declare function jQuery_5(selector: string): any;
declare namespace jQuery_5 {
    function ajax(url: string, settings?: any): void;
}

// 以上两个声明不冲突， jQuery_5 既是一个声明的方法，又是一个声明的对象。


// export 的语法与普通的 ts 中的语法类似，区别仅在于声明文件中禁止定义具体的实现15：

// export const name: string;
// export function getName(): string;
// export class Animal {
//     constructor(name: string);
//     sayHi(): string;
// }
// export enum Directions_1 {
//     Up,
//     Down,
//     Left,
//     Right
// }
// export interface Options {
//     data: any;
// }

// 使用export的时候，默认情况下会使declare失效  

// 我们也可以使用 declare 先声明多个变量，最后再用 export 一次性导出。上例的声明文件可以等价的改写为16：

// export default function foo(name: string): void 
// 这样子使用的时候就是 import foo from ""  而不是 import {foo} from ""

