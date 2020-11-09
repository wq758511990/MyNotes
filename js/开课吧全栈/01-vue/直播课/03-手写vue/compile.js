// 编译器

// 递归遍历dom树
// 判断节点类型，如果是文本，判断是否是插值绑定{{}}
// 如果是元素，遍历其属性，判断是否是指令或者事件，继续递归

class Compiler {
  // el：宿主元素
  // vm KVue实例
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      // 执行编译
      this.compile(this.$el);
    }
  }

  compile(el) {
    // 遍历el树
    const childNodes = el.childNodes;
    // childNodes不是数组，Array.from
    Array.from(childNodes).forEach((node) => {
      // 判断是否是元素
      if (this.isElement(node)) {
        this.compileElement(node);
      } else if (this.isInter(node)) {
        this.compileText(node);
      }

      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }
  isInter(node) {
    // 首先是文本类型
    // 其次内容是{{xxx}}
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }
  compileText(node) {
    this.update(node, RegExp.$1, "text");
  }
  compileElement(node) {
    // 遍历节点
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach((attr) => {
      // 规定：指令以k-xx="o"定义
      const attrName = attr.name; // k-xx
      const exp = attr.value; // oo
      if (this.isDirective(attrName)) {
        // 是指令
        const dir = attrName.substring(2); //k-后面的xx
        // 执行指令
        this[dir] && this[dir](node, exp);
      }
    });
  }
  isDirective(attr) {
    return attr.indexOf("k-") === 0;
  }
  // 更新函数
  update(node, exp, dir) {
    // 初始化
    // 指令对应的更新函数xxUpdater
    const fn = this[dir + "Updater"];
    fn && fn(node, this.$vm[exp]);

    // 更新处理,封装一个更新函数，可以更新对应dom元素
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
