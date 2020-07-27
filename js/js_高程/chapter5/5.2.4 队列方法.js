var colors = new Array(); //创建一个数组
var count = colors.unshift("red", "green"); //推入两项
console.log(colors); //2 

count = colors.unshift("black"); //推入另一项
console.log(count); //3 
var item = colors.pop(); //取得最后一项
console.log(item); //"green" 
console.log(colors.length); //2