/**
 * 声明文件
 */
// declare var JQuery: (Selector: string) => any

// 全局变量的声明文件主要有以下几种语法：

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型

// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。

// 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现5：

declare function JQuery(Selector: string): any

// 在函数类型的声明语句中，函数重载也是支持的6：
declare function jQuery(callBack: () => any): any;

declare class Animal {
    name: string;
    sayHi(): void; // 这里不能写具体的实现
    constructor(name: string);
}

declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }
}

interface AjaxSettings {
    method?: 'GET' | 'POST',
    data?: any;
}

declare namespace jQuery {
    interface AjaxSettings_1 {
        method?: 'GET' | 'POST',
        data?: any
    }
    function ajax(url: string, settings?: AjaxSettings): void;
}

// let settings: AjaxSettings = {
//     method: 'GET',
//     data: {
//         name: 'foo'
//     }
// }
// jQuery.ajax('/api/post_something', settings)

