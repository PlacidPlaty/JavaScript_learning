/**
 * A variable that is declared outside of a function is global 
 * and can be accessed by any function in your js code
 * 
 * If you declare a variable within a function without the keyword "var"
 * that variable will be a global automatically. It can be accessed anywhere in the program
 * Variables with the "var" keyword declared in a function will be scoped to that function
 * 
 * To avoid accidentally creating global variables, 
 * it’s best practice to declare variables explicitly with "let", "const", or "var".
 */

// global variable
var myGlobal = 10;
// also a global variable, assigned without var, let or const
thisIsGlobal = 20;

function fun1(){
    // global variable
    oopsGlobal = 5;

    // local variable (because of var keyword)
    var localVariable = 10;
}
