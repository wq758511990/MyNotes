var values = [0, 1, 5, 10, 15]; 
values.sort((a, b) => {a - b}); 
console.log(values);

// reverse()和 sort()方法的返回值是经过排序之后的数组。

// 5.2.6 操作方法
// concat
// slice


// splice
//  删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。
// 例如，splice(0,2)会删除数组中的前两项。
//  插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、0（要删除的项数）
// 和要插入的项。如果要插入多个项，可以再传入第四、第五，以至任意多个项。例如，
// splice(2,0,"red","green")会从当前数组的位置 2 开始插入字符串"red"和"green"。  替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起
// 始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，
// splice (2,1,"red","green")会删除当前数组位置 2 的项，然后再从位置 2 开始插入字符串
// "red"和"green"。