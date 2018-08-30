// console.log(234 == "234");//true
// console.log(234 === "234");//false
// console.log("cat" == "CAT");//false
// console.log("cat".toUpperCase() == "CAT");//true
// console.log(null === undefined);//false

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