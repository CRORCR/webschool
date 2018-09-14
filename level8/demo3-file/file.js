// fs 模块有用于重命名文件，删除文件，读取文件和写入文件的函数。
function readFile() {
    var fs = require("fs");
    fs.writeFileSync("a.js", "Hello fs!");
    console.log(fs.readFileSync("a.js").toString());
}

readFile()