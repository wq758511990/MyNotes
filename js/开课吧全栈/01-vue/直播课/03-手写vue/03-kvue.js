function update() {
  //   let app = document.getElementById("app");
  app.innerText = obj.foo;
}

function defineReactive(obj, key, val) {
  // 递归
  observe(val); // observe的时候会做判断 故而可以直接调用

  // 创建一个Dep和当前的key一一对应
  const dep = new Dep();

  // 对传入的obj进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log("get " + key);
      // 依赖收集
      Dep.target && dep.addDep(Dep.target);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        // newVal 也有可能是个对象, 需要再进行observe
        observe(newVal);
        console.log("set " + key + ":" + newVal);
        val = newVal;
        dep.notify();
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== "object" || obj === null) {
    // 传入的是个obj
    return;
  }
  new Observer(obj);
}
function proxy(vm, sourceKey) {
  // 代理函数方便直接访问属性
  Object.keys(vm[sourceKey]).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key];
      },
      set(newVal) {
        observe(newVal);
        vm[sourceKey][key] = newVal;

        // 值发生变化，调用更新函数
        // watchers.forEach((w) => w.update());
      },
    });
  });
}
// 创建kvue 构造函数
class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options;
    this.$data = options.data;
    // 响应化处理
    observe(this.$data);

    // 做代理，访问某个属性等于访问另一个属性
    proxy(this, "$data");

    // 创建编译器
    new Compiler(options.el, this);
  }
}

// 根据对象类型决定如何响应化
class Observer {
  constructor(value) {
    // 保存
    this.value = value;
    // 判断类型
    if (typeof value === "object") {
      this.walk(value);
    }
  }

  // 对象数据响应化
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

// 观察者: 保存更新函数，值发生变化调用更新函数
// const watchers = [];
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    // watchers.push(this);

    //Dep.target静态属性设置为当前watcher实例
    Dep.target = this;
    this.vm[this.key]; // 触发getter
    Dep.target = null; // 收集完成，置空
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key]);
  }
}

// 创建Dep:依赖，管理某个key相关的Watcher实例
class Dep {
  constructor() {
    this.deps = [];
  }

  addDep(dep) {
    this.deps.push(dep);
  }

  notify() {
    this.deps.forEach((dep) => dep.update());
  }
}
