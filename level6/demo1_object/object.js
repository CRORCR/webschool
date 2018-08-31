//原型链
//util核心模块(require("utils"))提供了一个创建函数原型链。
//该函数称为 inherits,并采用一个子类继之以父类
var inherits = require("util").inherits;
function Car(n){
    this.name = n;
    this.drive= function (destination) {
        console.log(this.name, "can drive to", destination);
    }
}

function FlyingCar(name) {
    Car.call(this, name);
    this.fly = function (destination) {
        console.log(this.name, "can fly to", destination);
    }
}
inherits(FlyingCar, Car);

var bird = new FlyingCar("XXX");
bird.drive("New York");
bird.fly("Seattle");