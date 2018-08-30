//对象名() 表示全局的, 加new创建对象,是新建的对象
function myData() {
    this.myData = 123;
    console.log("Is this global?: ", this == global);
}

myData(); // Is this global?: true
console.log(global.myData); // 123

var newFoo = new myData(); // Is this global?: false
console.log(newFoo.myData); // 123