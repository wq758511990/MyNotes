// 12中节点类型
// someNode.nodeType == Node.ELEMENT_NODE 判断是否是元素节点 不适用IE
if (someNode.nodeType == 1) { //适用于所有浏览器
    alert("Node is an element.");
}
if (someNode.nodeType == 1) {
    // nodeName 元素名称
    value = someNode.nodeName; //nodeName 的值是元素的标签名
}
Node.ELEMENT_NODE(1)
Node.ATTRIBUTE_NODE(2)
Node.TEXT_NODE(3)
Node.CDATA_SECTION_NODE(4)
Node.ENTITY_REFERENCE_NODE(5)
Node.ENTITY_NODE(6)
Node.PROCESSING_INSTRUCTION_NODE(7)
Node.COMMENT_NODE(8)
Node.DOCUMENT_NODE(9)
Node.DOCUMENT_TYPE_NODE(10)
Node.DOCUMENT_FRAGMENT_NODE(11)
Node.NOTATION_NODE(12)


// 包含在
// childNodes 列表中的每个节点相互之间都是同胞节点。通过使用列表中每个节点的 previousSibling
// 和 nextSibling 属性，可以访问同一列表中的其他节点。列表中第一个节点的 previousSibling 属性
// 值为 null，而列表中最后一个节点的 nextSibling 属性的值同样也为 null，


// 父节点的 firstChild 和 lastChild
// 属性分别指向其 childNodes 列表中的第一个和最后一个节点。

// 插入
insertBefore()
appendChild()

// 替换
replaceChild()

// 移除
removeChild()

// 复制
cloneNode()  // 参数传入True，则为深拷贝，拷贝节点本身及其所有子节点，不传则为浅拷贝，仅拷贝节点本身，此时节点并未被添加，需要用appendChild或者insertBefore插入节点

var deepList = myList.cloneNode(true);
console.log(deepList.childNodes.length); //3（IE < 9）或 7（其他浏览器）
var shallowList = myList.cloneNode(false);
console.log(shallowList.childNodes.length); //0 
// 在这个例子中，deepList 中保存着一个对 myList 执行深复制得到的副本。因此，deepList 中
// 包含 3 个列表项，每个列表项中都包含文本。而变量 shallowList 中保存着对 myList 执行浅复制得
// 到的副本，因此它不包含子节点。deepList.childNodes.length 中的差异主要是因为 IE8 及更早版
// 本与其他浏览器处理空白字符的方式不一样。IE9 之前的版本不会为空白符创建节点。



//取得文档标题
var originalTitle = document.title;
//设置文档标题
document.title = "New page title";

//取得完整的 URL
var url = document.URL;
//取得域名
var domain = document.domain;
//取得来源页面的 URL
var referrer = document.referrer;

// 三个属性只有domain能设置，但是也有限制
//假设页面来自 p2p.wrox.com 域
document.domain = "wrox.com"; // 成功
document.domain = "nczonline.net"; // 出错

// 要想取得文档中的所有元素，可以向 getElementsByTagName()中传入"*"。在 JavaScript 及 CSS
// 中，星号（*）通常表示“全部”。下面看一个例子。
var allElements = document.getElementsByTagName("*");

document.write('123') // 当前文档写入内容

// 页面加载完成之后, 'Hello world' 会替换当前文档内容
window.onload = function () {
    document.write("Hello world!");
};

// 10.1.3

if (element.tagName == "div") { //不能这样比较，很容易出错！
    //在此执行某些操作
}
if (element.tagName.toLowerCase() == "div") { //这样最好（适用于任何文档）
    //在此执行某些操作
}

// 元素中指定的所有信息，都可以通过下列 JavaScript 代码取得：
var div = document.getElementById("myDiv"); 
alert(div.id); //"myDiv"" 
alert(div.className); //"bd" 
alert(div.title); //"Body text" 
alert(div.lang); //"en" 
alert(div.dir); //"ltr"

getAttribute()
alert(div.getAttribute("id")); //"myDiv" 

setAttribute()
div.setAttribute("id", "someOtherId");

removeAttribute()
div.removeAttribute("class");

// 创建元素
var div = document.createElement("div");


// 10.1.4 text类型
// nodeType 的值为 3； 
// nodeName 的值为"#text"； 
// nodeValue 的值为节点所包含的文本；
// parentNode 是一个 Element； 
// 不支持（没有）子节点。
// 可以通过 nodeValue 属性或 data 属性访问 Text 节点中包含的文本，这两个属性中包含的值相
// 同。对 nodeValue 的修改也会通过 data 反映出来，反之亦然。使用下列方法可以操作节点中的文本。
// appendData(text)：将 text 添加到节点的末尾。
// deleteData(offset, count)：从 offset 指定的位置开始删除 count 个字符。
// insertData(offset, text)：在 offset 指定的位置插入 text。 
// replaceData(offset, count, text)：用 text 替换从 offset 指定的位置开始到 offset+ 
// count 为止处的文本。
// splitText(offset)：从 offset 指定的位置将当前文本节点分成两个文本节点。
// substringData(offset, count)：提取从 offset 指定的位置开始到 offset+count 为止处的字符串。


// 10.1.5 Comment类型
// 注释在 DOM 中是通过 Comment 类型来表示的。Comment 节点具有下列特征：
// nodeType 的值为 8； 
// nodeName 的值为"#comment"； 
// nodeValue 的值是注释的内容；
// parentNode 可能是 Document 或 Element； 
// 不支持（没有）子节点。

// 10.1.6 CDATASection类型
// CDATASection 类型只针对基于 XML 的文档，表示的是 CDATA 区域。与 Comment 类似，
// CDATASection 类型继承自 Text 类型，因此拥有除 splitText()之外的所有字符串操作方法。
// CDATASection 节点具有下列特征：
// nodeType 的值为 4； 
// nodeName 的值为"#cdata-section"； 
// nodeValue 的值是 CDATA 区域中的内容；
// parentNode 可能是 Document 或 Element； 
// 不支持（没有）子节点。

// 10.1.9 Attr类型
// 元素的特性在 DOM 中以 Attr 类型来表示。在所有浏览器中（包括 IE8），都可以访问 Attr 类型
// 的构造函数和原型。从技术角度讲，特性就是存在于元素的 attributes 属性中的节点。特性节点具有
// 下列特征：
// nodeType 的值为 2； 
// nodeName 的值是特性的名称；
// nodeValue 的值是特性的值；
// parentNode 的值为 null； 
// 在 HTML 中不支持（没有）子节点；
// 在 XML 中子节点可以是 Text 或 EntityReference。