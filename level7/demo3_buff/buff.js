// JavaScript 语言自身只有字符串数据类型，没有二进制数据类型
// 因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

// 没有var申明的变量就是全局变量
var b = new Buffer(10000);
var str = "                         ";
b.write(str);
console.log(b.length); //10000
console.log(Buffer.byteLength(str));//25


// 要将字符串转换为缓冲区，请调用Buffer类构造函数传递字符串和编码。
function demo1() {
    var str = "Hello World";
    var buffer = new Buffer(str, "utf-8");

    var roundTrip = buffer.toString("utf-8");
    console.log(roundTrip); // Hello
    
}

function demo2() {
    var b = new Buffer(100);
    var str = "this is a test";
    b.write(str);
    console.log(b.toString("utf8"));
}

// 缓冲区追加到另一个缓冲区的末尾，可以使用concat
function demo3() {
    var b1 = new Buffer("My name is ");
    var b2 = new Buffer("lcq");
    var b3 = Buffer.concat([ b1, b2 ]);
    console.log(b3.toString("utf8"));
    
}