/**
 * 
 * AND: &&
 * OR: ||
 */


// equality: can convert types
// == returns true for both 3 == 3 AND 3 == '3'
function checkEqualEqual(input){
    if (input == '3'){
        return "Equal";
    }
    return "Not Equal";
}

// Strict equality: does not convert variable types
// === returns true for 3 === 3 BUT not 3 === '3'
function checkEqualEqualEqual(input){
    if (input === '3'){
        return "Equal";
    }
    return "Not Equal";
}

console.log("Check using ==: " + checkEqualEqual(3));
console.log("Check using ===: " + checkEqualEqualEqual(3))
console.log()


// Inequality operator, opposite of equality operator (convert types)
function checkInEqualInEqual(input){
    if (input != '16'){
        return "Equal";
    }
    return "Not Equal";
}

// Strict inequality operator, opposite of strict equalit operator (does not convert types)
function checkInEqualInEqualInEqual(input){
    if (input !== '16'){
        return "Equal";
    }
    return "Not Equal";
}

/**
 * Ternary statement
 * condition ? statement-if-true : statement-if-false;
 */

function checkEqual(a, b) {
    // example
    return a === b ? true : false;
}
console.log("ternary operator: " + checkEqual(1, 2));
console.log();

/**
 *  nesting ternary operators
 */
function checkSign(num) {
    // check the sign of the input number
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0))
