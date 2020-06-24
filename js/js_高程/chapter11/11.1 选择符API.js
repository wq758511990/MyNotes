// Selectors API Level 1 的核心是两个方法：querySelector()和 querySelectorAll()。
// 都是css选择器


// Selectors API Level 2 规范为 Element 类型新增了一个方法 matchesSelector()。这个方法接收
// 一个参数，即 CSS 选择符，如果调用元素与该选择符匹配，返回 true；否则，返回 false。看例子。
if (document.body.matchesSelector("body.page1")) {
    //true 
}


// 11.3  H5

//删除"user"类
//首先，取得类名字符串并拆分成数组
var classNames = div.className.split(/\s+/); // 用空格分割
//找到要删的类名
var pos = -1,
    i,
    len;
for (i = 0, len = classNames.length; i < len; i++) {
    if (classNames[i] == "user") {
        pos = i;
        break;
    }
}
//删除类名
classNames.splice(i, 1);
//把剩下的类名拼成字符串并重新设置
div.className = classNames.join(" ");

//删除"disabled"类
div.classList.remove("disabled");
//添加"current"类
div.classList.add("current");
//切换"user"类
div.classList.toggle("user");


// 11.3.2 焦点管理

/**
 * document.activeElement 属性，这个
属性始终会引用 DOM 中当前获得了焦点的元素。
 */

// 默认情况下，文档刚刚加载完成时，document.activeElement 中保存的是 document.body 元
// 素的引用。文档加载期间，document.activeElement 的值为 null。

// 另外就是新增了 document.hasFocus()方法，这个方法用于确定文档是否获得了焦点。

// 11.3.3 HTMLDocument的变化
// 1、readyState

// document.readyState  
//  loading，正在加载文档；
//  complete，已经加载完文档。

