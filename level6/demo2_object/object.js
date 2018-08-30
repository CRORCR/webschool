// 覆盖子类中的函数
// 要覆盖父函数但仍使用一些原始功能，只需执行以下操作:
// 在子原型上创建一个具有相同名称的函数。调用父函数类似于我们调用父构造函数的方法，基本上使用
var inherits = require("util").inherits;
function Base() {
    this.message = "message";
};
Base.prototype.foo = function () {
    return this.message + " base foo"
};

// Child
function Child() { Base.call(this); };
inherits(Child, Base);

Child.prototype.foo = function () {
    return Base.prototype.foo.call(this) + " child foo";
}

var child = new Child();
console.log(child.foo());