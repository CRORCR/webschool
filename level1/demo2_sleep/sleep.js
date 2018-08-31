function longRunningOperation(callback) {
    setTimeout(callback, 3000);
}

function userClicked() {
        console.log("starting a long operation");
        longRunningOperation(function () {
            console.log("ending a long operation");
        });
}

 // userClicked();
demo()


var num=1000000000
//测试,一秒发送200笔交易,是否可行
function demo() {
    setInterval(function () {
        for (var i=0;i<1000;i++){
            console.log(num)
            num--
        }
    }, 1000);
}