//prototype 如果函数或者字段加上这个关键字,就变成了全局的
function someClass() {
   this.someProperty = "1";
}

someClass.prototype.someMemberFunction = function () {
   this.someProperty = "2";
   console.log("3");
}

var instance = new someClass();

console.log(instance.someProperty);
instance.someMemberFunction();
console.log(instance.someProperty);