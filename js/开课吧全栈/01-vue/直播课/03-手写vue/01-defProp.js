const obj = {
  foo: "foo",
  bar: "bar",
  baz: { a: 1 },
  arr: [1, 2, 3],
};
function defineReactive(obj, key, val) {
  // 递归
  observe(val); // observe的时候会做判断 故而可以直接调用

  // 对传入的obj进行访问拦截
  console.log(obj);
  Object.defineProperty(obj, key, {
    get() {
      console.log("get " + key);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        // newVal 也有可能是个对象, 需要再进行observe
        observe(newVal);
        console.log("set " + key + ":" + newVal);
        val = newVal;
        // 更新函数
        update();
      }
    },
  });
}

function update() {
  //   let app = document.getElementById("app");
  app.innerText = obj.foo;
}

function observe(obj) {
  if (typeof obj !== "object" || obj === null) {
    // 传入的是个obj
    return;
  }
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

function set(obj, key, val) {
  defineReactive(obj, key, val);
}

observe(obj);

obj.foo = "bbb";

// defineReactive(obj, "foo", "");
// obj.foo = new Date().toLocaleTimeString();

// setInterval(() => {
//   obj.foo = new Date().toLocaleTimeString();
// }, 1000);

// Object.defineProperty 对数组无效 没有key、val
// 数组也是对象
// 改变数组的方法 push pop shift unshift splice reverse sort
// 重写这7个方法
// 替换数组实例的原型方法，修改数组的同时，通知更新
