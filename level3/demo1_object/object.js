//声明对象就可以直接用
var user={}
user.name="lcq"
user.age=10
console.log(user)
//删除属性用delete
delete user.age
console.log(user)

//{ name: 'lcq', age: 10 }
// { name: 'lcq' }