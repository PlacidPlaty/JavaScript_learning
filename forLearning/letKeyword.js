/**
 * "let" keyword does not allow you to re-declare a variable
 * eg:
 * No errors if you use var
 * var catName = "Dog";
 * var catName = "Penguin";
 * 
 * Error will happen if you use let
 * let catName = "Dog";
 * let catName = "Penguin"; // this line will produce an error
 * 
 * The scope of "var" variable is global if declared outside of a function,
 * but local if declared within a function
 * VS
 * The scope of "let" variable is limited to the block statement it is declared in
 */

function catTalk() {
    // "use strict" at the top of a js file or within a function can help to catch coding mistakes
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}

function checkScopeVar() {
    "use strict";

    var i = "function scope";
    if (true) {
        /*
        i can be changed anywhere within the function
        */
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return 1;
}
console.log("var: ")
checkScopeVar()
console.log()

function checkScopeLet() {
    "use strict";

    let i = "function scope";
    if (true) {
        /**
         * changing i in the if statement does not change i in the function block
         * This is why let keyword is preferred,
         * as it make sures you only declare a variable where you want to
         */
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return 1;
}
console.log("let: ")
checkScopeLet()
console.log()
