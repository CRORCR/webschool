//创建数组两种方式
function demo() {
    var arr1 = new Array()
    var arr2 = []
    arr1.push(1)
    arr2.push(2)
    console.log(arr1)
    console.log(arr2)
//判断是否是数组 isArray
    console.log(Array.isArray(arr1))
    console.log(Array.isArray(arr2))
}

// demo()
demo2()

//push:尾部添加 unshift:头部添加
//pop:尾部弹出  shift:头部弹出
function demo2() {
    var myData = [];
    myData.push(1);
    console.log(myData);

    myData.unshift(2);
    console.log(myData);

    console.log(myData[0]); // prints 2

    console.log(myData.length)

    //删除数组元素 splice 两个参数:从第几个角标开始删除几个元素
    var arr3 = [ 0,1,2,3,4,5 ];
    arr3.splice(2, 2);
    console.log(arr3);
    console.log(arr3.length);
}