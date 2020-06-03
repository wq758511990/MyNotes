// 10.2.1 动态脚本
function loadScriptString(code) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script);
}
// 下面是调用这个函数的示例：
loadScriptString("function sayHi(){alert('hi');}");


//10.2.2 动态样式
/* <link rel="stylesheet" type="text/css" href="styles.css"> */
/* 使用 DOM 代码可以很容易地动态创建出这个元素： */
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "style.css";
var head = document.getElementsByTagName("head")[0];
head.appendChild(link);

// 加载外部样式文件的过程是异步的，也就是加载样式与执行 JavaScript 代码的过程没有固定的次序。
function loadStyleString(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
//    调用这个函数的示例如下：
loadStyleString("body{background-color:red}");


// 10.2.3 操作表格


// 10.2.4 使用NodeList
// 理解 NodeList 及其“近亲”NamedNodeMap 和 HTMLCollection，是从整体上透彻理解 DOM 的
// 关键所在。这三个集合都是“动态的”；换句话说，每当文档结构发生变化时，它们都会得到更新。因
// 此，它们始终都会保存着最新、最准确的信息。从本质上说，所有 NodeList 对象都是在访问 DOM 文
// 档时实时运行的查询。

// 例如，下列代码会导致无限循环：
var divs = document.getElementsByTagName("div"),
    i,
    div;
for (i = 0; i < divs.length; i++) {
    div = document.createElement("div");
    document.body.appendChild(div);
}

// 可以初始化的时候把length赋给其他变量，用该变量判断
var divs = document.getElementsByTagName("div"),
    i,
    len,
    div;
for (i = 0, len = divs.length; i < len; i++) {
    div = document.createElement("div");
    document.body.appendChild(div);
}