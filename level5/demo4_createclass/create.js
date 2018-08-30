//私有的类,不允许调用
function Message() {
    var message = "hello";

    function setMessage(newMessage) {
        if (!newMessage)
            throw new Error("cannot set empty message");
        message = newMessage;
    }

    function printMessage() {
        console.log(message);
    }

    return {
        setMessage: setMessage,
        printMessage: printMessage
    };
}

// Pattern in use
var hi1 = Message();
hi1.printMessage(); // hello

hi1.setMessage("hi");
hi1.printMessage(); // hi

hi1.printMessage(); // hello