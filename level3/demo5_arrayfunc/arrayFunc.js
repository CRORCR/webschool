// push和pop函数
// push和pop函数允许分别向数组的末尾添加和删除项目

//unshift(加)和shift(-)函数
//数组前面插入或删除项目

// var nums = [ 1, 1, 2, 3, 5, 8 ];
// nums.push(13);
// console.log(nums);
// nums.pop();
// console.log(nums);

// var nums = [ 1, 2, 3, 5, 8 ];
// nums.unshift(1);
// console.log(nums);
// nums.shift();
// console.log(nums);

//join从数组返回一个字符串
// var nums = [ 1, 1, 2, 3, 5, 8 ];
// var s = nums.join(", ");
// console.log(s);

// sort 排序
// var nums = [ 3, 1, 8, 5, 2, 1];
// nums.sort();
// console.log(nums);

// Loop和forEach函数 迭代数组中的项
var arr =[ "hello", "world", "hello", "nodejs"]
arr.forEach( function  (value) {
    console.log(value);
});
