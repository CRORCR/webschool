var myData = 1;
var myValue = 2;
console.log(myData / myValue);//0.5
console.log(myData * myValue);//2
console.log(myData - myValue);//-1
console.log(myData % 2);//1

//当执行浮点数学运算时，我们不能操作任意实数和期望精确值,会有精度问题
console.log(1 - 0.3 + 0.1 == 0.8);//false
// 这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，
// 因为计算机无法精确表示无限循环小数。
// 要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001)

