let target = {
  msg1: "msg1",
  msg2: "msg2",
};

let handler = {
  get: function (target, prop, receiver) {
    console.log("target", target);
    console.log("prop", prop);
    console.log("receiver", receiver);
    return Reflect.get(...arguments);
  },
  set: function (obj, prop, value) {
    console.log("obj", obj);
    console.log("prop", prop);
    console.log("value", value);
    obj[prop] = value;
  },
};

const proxy3 = new Proxy(target, handler);

console.log(proxy3.msg1);
proxy3.msg1 = "msg3";
console.log(proxy3.msg1);
