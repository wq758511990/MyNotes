// 测试代码：
let data = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

let activeEffect = null;
let effectMap = new WeakMap();

function observe(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (!activeEffect) return;
      console.log("get", target, key);
      let depsMap = effectMap.get(target);
      if (!depsMap) {
        effectMap.set(target, (depsMap = new Map()));
      }
      let deps = depsMap.get(key);
      if (!deps) {
        depsMap.set(key, (deps = new Set()));
      }
      deps.add(activeEffect);
      if (typeof target[key] === "object") {
        return observe(target[key]);
      }
      return Reflect.get(target, key);
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue);
      console.log("target", key, newValue);
      const depsMap = effectMap.get(target);
      const deps = depsMap.get(key);
      for (const fn of deps) {
        fn();
      }
    },
  });
}

const proxyData = observe(data)

function effect(fn) {
  activeEffect = fn;
  fn();
}

effect(() => {
  console.log("a", proxyData.a);
});

proxyData.a = "123";
