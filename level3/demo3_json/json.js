var obj = {
    "first_name": "HTML",
    "last_name": "CSS"
}
//对象转string
var str=JSON.stringify(obj)
console.log(str)
//string转对象
console.log((JSON.parse(str)))