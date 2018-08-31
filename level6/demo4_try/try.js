// Node.js有一个约定，如果有错误，回调的第一个参数的错误。
// 如果没有错误，我们回调错误设置为null
function getConnection(callback) {
    var connection;
    try {
        throw new Error("connection failed");
        callback(null, connection);
    } catch (error) {
        callback(error, null);
    }
}

getConnection(function (error, connection) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Connection succeeded:", connection);
    }
});