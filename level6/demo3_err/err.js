function a() {
    throw new Error("Something bad happened!");
}
a();

//js中有try catch
//finally

// catch部分只有在抛出错误时才执行。finally部分仍然执行，尽管在try部分中抛出了任何错误。