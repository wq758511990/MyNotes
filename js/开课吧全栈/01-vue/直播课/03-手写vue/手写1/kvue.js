function defineReactive(obj, key, val) {
  // 对值进行递归，因为值也有可能是对象
  observe(val);

  // 创建dep 与key一一对应
  const dep = new Dep();

  // 拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log("get " + key);
      // 收集watcher
      Dep.target && dep.addDep(Dep.target);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        // newVal 也需要递归
        observe(newVal);
        console.log("set " + key + ":" + newVal);
        val = newVal;
        // 通知更新
        dep.notify();
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== "object" || obj === null) return;
  new Observer(obj);
}

class Observer {
  constructor(value) {
    // 保存
    this.value = value;
    if (typeof value === "object") {
      // 对象的响应式处理
      this.walk(value);
    } else {
      // 数组
    }
  }
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    Dep.target = this;
    this.vm[this.key]; // 触发getter， deps收集Watcher
    Dep.target = null; // 收集完成后置空
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key]);
  }
}

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

class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options;
    this.$data = options.data;
    // 响应化处理
    observe(this.$data);

    // 代理
    proxy(this, "$data");

    // 编译
    new Compiler(options.el, this);
  }
}

function proxy(vm, sourceKey) {
  // 代理函数， 方便直接访问属性而不需要$data
  Object.keys(vm[sourceKey]).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key];
      },
      set(newVal) {
        vm[sourceKey][key] = newVal;
      },
    });
  });
}
