var myData = 1;
var myValue = 2;
console.log(myData / myValue);//0.5
console.log(myData * myValue);//2
console.log(myData - myValue);//-1
console.log(myData % 2);//1

//当执行浮点数学运算时，我们不能操作任意实数和期望精确值,会有精度问题
console.log(1 - 0.3 + 0.1 == 0.8);//false
