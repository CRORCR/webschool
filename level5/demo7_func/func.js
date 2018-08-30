// 相同的函数创建的原型在所有对象之间共享
// 假设我们有1000个实例创建了某个对象，而原型的所有属性和函数都是共享的。因此原型节省了内存。
function shape() { };
shape.prototype.myValue = 123;

var bas = new shape();
var myItem = new shape();

console.log(bas.myValue); // 123
console.log(myItem.myValue); // 123

shape.prototype.myValue = 456;
console.log(bas.myValue); // 456
console.log(myItem.myValue); // 456