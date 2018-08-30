// 立即执行函数
// 我们可以立即执行一个函数，在定义它之后。只需将函数包裹在括号()中并调用它。
(function demo(){
    console.log("hello world")
})()

/*
function demo(){
    console.log("hello world")
}
(func)()
*/


//高阶函数,就是函数作为参数传递
function foo() {
    console.log("2000 milliseconds have passed since this demo started");
}
setTimeout(foo, 2000);