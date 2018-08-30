// JavaScript中的字符串是Unicode字符序列。
// 使用长度为1的字符串来表示字符。
// 字符串可以用 '' 或 "" 括起来，它们在功能上等同。
// 引号字符串中包含引号，我们可以使用\' 或者 \"

console.log('Javascript\'s new feature.')
console.log("\"Hey, new feature!\", he said.")

//get length
var x = "cat";
console.log(x.length);

//从字符串中提取子字符串，请使用 substr 或 splice 函数
var y =" hello world "
console.log(y.slice(0,5))
console.log(y.substr(0,5))

// split 拆分为子字符串
console.log(y.split(" "))

//trim 删除首尾空格
console.log(y.trim())