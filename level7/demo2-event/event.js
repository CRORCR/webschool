var fs = require("fs");

//执行异步操作的函数将回调函数作为最后一个参数， error作为回调第一个参数。
fs.readFile('input.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕");