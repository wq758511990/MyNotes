//调整到 100×100 
window.resizeTo(100, 100);
//调整到 200×150 
window.resizeBy(100, 50);
//调整到 300×300 
window.resizeTo(300, 300);


// window.open()方法既可以导航到一个特定的 URL，也可以打开一个新的浏览器窗口。这个
// 方法可以接收 4 个参数：要加载的 URL、窗口目标、一个特性字符串以及一个表示新页面是否取代浏览
// 器历史记录中当前加载页面的布尔值。通常只须传递第一个参数，最后一个参数只在不打开新窗口的情
// 况下使用。

//等同于< a href="http://www.wrox.com" target="topFrame"></a> 
window.open("http://www.wrox.com/", "topFrame");

// 第三个参数是一个逗号分隔的设置字符串，表示在新窗口中都显示哪些特性。下表列出了可以出现
// 在这个字符串中的设置选项。
// 设 置 值 说 明
// fullscreen yes或no 表示浏览器窗口是否最大化。仅限IE 
// height 数值 表示新窗口的高度。不能小于100 
// left 数值 表示新窗口的左坐标。不能是负值
// location yes或no 表示是否在浏览器窗口中显示地址栏。不同浏览器的默认值不同。如果
// 设置为no，地址栏可能会隐藏，也可能会被禁用（取决于浏览器）
// menubar yes或no 表示是否在浏览器窗口中显示菜单栏。默认值为no
// resizable yes或no 表示是否可以通过拖动浏览器窗口的边框改变其大小。默认值为no
// scrollbars yes或no 表示如果内容在视口中显示不下，是否允许滚动。默认值为no
// status yes或no 表示是否在浏览器窗口中显示状态栏。默认值为no
// toolbar yes或no 表示是否在浏览器窗口中显示工具栏。默认值为no
// top 数值 表示新窗口的上坐标。不能是负值
// width 数值 表示新窗口的宽度。不能小于100


window.open('http://www.wrox.com/', "topFrame", "height=800, width=500")

var wroxWin = window.open("http://www.wrox.com/", "wroxWindow",
    "height=400,width=400,top=10,left=10,resizable=yes");
//调整大小
wroxWin.resizeTo(500, 500);
//移动位置
wroxWin.moveTo(100, 100);


// 如果是浏览器内置的弹出窗口屏蔽
var wroxWin = window.open("http://www.wrox.com", "_blank");
if (wroxWin == null) {
    alert("The popup was blocked!");
}

// 如果是扩展程序的窗口屏蔽

var blocked = false
try {
    var wroxWin = window.open("http://www.wrox.com", "_blank");
    if (wroxWin == null) {
        blocked = true;
    }
}

catch (ex) {
    blocked = true
}

if (blocked) {
    alert("The popup was blocked!");
}

// setTimeout()之后，该方法会返回一个数值 ID，表示超时调用。这个超时调用 ID 是计划执
// 行代码的唯一标识符，可以通过它来取消超时调用。要取消尚未执行的超时调用计划，可以调用
// clearTimeout()方法并将相应的超时调用 ID 作为参数传递给它，如下所示。

//设置超时调用
var timeoutId = setTimeout(function () {
    alert("Hello world!");
}, 1000);
//注意：把它取消
clearTimeout(timeoutId);

var result = prompt("What is your name? ", ""); 
if (result !== null) { 
 alert("Welcome, " + result); 
}