// Node.js 异步编程的直接体现就是回调。
// 异步编程依靠回调实现，但不是使用了回调后程序就异步化了。
// 回调函数在完成任务后就会被调用
// 例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
// 这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
// 回调函数一般作为参数的最后一个参数出现


//阻塞式代码
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");

//非阻塞式代码
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");

// 第一个实例在文件读取完后才执行完程序。 第二个实例我们不需要等待文件读取完，读取文件同时执行后面代码，提高程序的性能。
// 因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。

