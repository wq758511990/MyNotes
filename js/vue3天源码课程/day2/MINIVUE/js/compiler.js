class Compiler {
    constructor(vm) {
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }
    // 编译模板，处理文本节点和元素节点
    compile(el) {
        // 获取el中的所有结点
        // childNodes是伪数组，用Array.from 转换成数组
        let childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            // 处理文本节点
            if (this.isTextNode(node)) {
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                // 处理元素节点
                this.compileElement(node)
            }
            // 判断node是否有子节点，若有子节点则递归调用compile
            if (node.childNodes && node.childNodes.length !== 0) {
                this.compile(node)
            }
        })
    }
    // 编译元素节点，处理指令
    compileElement(node) {
        console.log(node.attributes)
        Array.from(node.attributes).forEach(attr => {
            let attrName = attr.name
            if (this.isDirective(attrName)) {
                // 是vue指令
                // v-text --> text
                attrName = attrName.substr(2)
                let key = attr.value // 属性的值
                this.update(node, key, attrName)
            }
        })
    }

    update(node, key, attrName) {
        let updateFn = this[attrName + 'Updater']
        // .call改变this指向
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }

    // 处理v-text
    textUpdater(node, value, key) {
        node.textContent = value
        // 这里的this有问题，因为update方法中调用textUpdater时是直接调用，故而这里this并不是指向compiler实例
        new Watcher(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }
    // 处理v-model
    modelUpdater(node, value, key) {
        node.value = value
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })
        // 双向绑定
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }
    // 编译文本节点，处理差值表达式
    compileText(node) {
        // console.dir(node)
        // 差值表达式 {{msg}}
        let reg = /\{\{(.+?)\}\}/ // ?非贪婪模式， 尽可能早的完成匹配
        let value = node.textContent
        if (reg.test(value)) {
            // 获取匹配到的值
            let key = RegExp.$1.trim()
            // 将文本节点的差值表达式整个替换为vm实例中对应的变量值
            node.textContent = value.replace(reg, this.vm[key])

            // 创建watcher对象，当数据更新改变试图
            new Watcher(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }
    // 判断元素属性是否是指令
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }
    // 判断节点是否是文本节点
    isTextNode(node) {
        return node.nodeType === 3
    }
    // 判断节点是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1
    }
}