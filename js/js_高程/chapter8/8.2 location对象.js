location.assign("http://www.wrox.com"); 
// 这样，就可以立即打开新 URL 并在浏览器的历史记录中生成一条记录。如果是将 location.href
// 或 window.location 设置为一个 URL 值，也会以该值调用 assign()方法。例如，下列两行代码与
// 显式调用 assign()方法的效果完全一样。
window.location = "http://www.wrox.com"; 
location.href = "http://www.wrox.com";


//假设初始 URL 为 http://www.wrox.com/WileyCDA/ 
//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1" 
location.hash = "#section1"; 
//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript" 
location.search = "?q=javascript"; 
//将 URL 修改为"http://www.yahoo.com/WileyCDA/" 
location.hostname = "www.yahoo.com"; 
//将 URL 修改为"http://www.yahoo.com/mydir/" 
location.pathname = "mydir"; 
//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/" 
location.port = 8080;


// 上述方法都会生成历史记录，用户可以返回跳转的上一个页面
// location.replace() 不会生成记录，无法返回
location.replace('http://www.wrox.com')


// 与位置有关的最后一个方法是 reload()，作用是重新加载当前显示的页面。如果调用 reload()
// 时不传递任何参数，页面就会以最有效的方式重新加载。也就是说，如果页面自上次请求以来并没有改
// 变过，页面就会从浏览器缓存中重新加载。如果要强制从服务器重新加载，则需要像下面这样为该方法
// 传递参数 true。

location.reload(); //重新加载（有可能从缓存中加载）
location.reload(true); //重新加载（从服务器重新加载）


//后退一页
history.go(-1); 
//前进一页
history.go(1); 
//前进两页
history.go(2);


// 也可以给 go()方法传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个
// 位置——可能后退，也可能前进，具体要看哪个位置最近。如果历史记录中不包含该字符串，那么这个
// 方法什么也不做，例如：
//跳转到最近的 wrox.com 页面
history.go("wrox.com"); 
//跳转到最近的 nczonline.net 页面
history.go("nczonline.net");