// JavaScript同时具有等于运算符"=="和精确等于运算符"==="
// console.log(234 == "234");//true
// console.log(234 === "234");//false
// console.log("cat" == "CAT");//false
// console.log("cat".toUpperCase() == "CAT");//true
// console.log(null === undefined);//false
// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
// 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较
function fine(param) {
    if (param == null || param == undefined || param == ""){
        throw new Error("Invalid Argument");
    }else{
        console.log("success")
    }
}
fine("aa")

//test new number
var x = 234;
var x1 = new Number(234);
console.log(typeof x);//number
console.log(typeof x1);//number
console.log(x1 == x);//true
console.log(x1 === x);//false