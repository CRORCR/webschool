//http://localhost:8080/ 输入这个链接,能够看到页面输出了body信息
//length是内置函数
//writeHead
var http = require("http");

function process_request(req, res) {
    var body = 'Thanks for calling!\n';
    var content_length =  body.length ;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(process_request);
s.listen(8080);