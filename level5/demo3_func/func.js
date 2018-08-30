var myData = {
    myValue: 123,
    myFunction: function () {
        console.log("inside this.myValue is:", this.myValue);
    }
}
console.log("myData.myValue is: ", myData.myValue); // myData.myValue is: 123
myData.myFunction();