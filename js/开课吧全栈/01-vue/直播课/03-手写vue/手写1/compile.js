// 编译器

// 递归遍历dom树
// 判断节点类型，如果是文本，判断是否是差值绑定（正则匹配）
// 元素-便利属性，判断指令事件，递归

class Compiler {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      this.compile(this.$el);
    }
  }

  compile(el) {
    // 遍历
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      // 判断类型
      if (this.isElement(node)) {
        this.compileElement(node);
      } else if (this.isInter(node)) {
        this.compileText(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }
  isDirective(name) {
    return name.indexOf("k-") === 0;
  }
  // 编译插值文本
  compileText(node) {
    this.update(node, RegExp.$1, "text");
  }
  compileElement(node) {
    // 节点属性
    const nodeAttrs = node.attributes;
    // 遍历节点属性
    Array.from(nodeAttrs).forEach((attr) => {
      // 指令k-xx="oo"
      const attrName = attr.name; // k-xx
      const exp = attr.value; // oo
      if (this.isDirective(attrName)) {
        // 是指令
        const dir = attrName.substring(2); // 拿到xx
        // 执行指令
        this[dir] && this[dir](node, exp);
      }
    });
  }
  update(node, exp, dir) {
    // 初始化
    // 指令对应更新函数xxUpdater
    const fn = this[dir + "Updater"];
    fn && fn(node, this.$vm[exp]);

    // 更新处理，封装一个更新函数，更新对应dom元素
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val);
    });
  }
  textUpdater(node, value) {
    node.textContent = value;
  }
  htmlUpdater(node, value) {
    node.innerHTML = value;
  }
  // k-text
  text(node, exp) {
    this.update(node, exp, "text");
  }
  html(node, exp) {
    this.update(node, exp, "html");
  }
}
