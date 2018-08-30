// 如果函数提供不可解析的值，它们返回特殊值NaN
console.log(parseInt("cat"));
console.log(parseFloat("css"));

//要测试NaN，请使用isNaN函数
isNaN(parseInt("cat"));

console.log(isFinite(10/5));
console.log(isFinite(10/0));
console.log(isFinite(parseFloat("css")));