
/*
7 data types:

1. undefined: a variable that has not been defined yet
2. null 
3. boolean 
4. string 
5. symbol: immutable, primitive value that is unique
6. number
7. object: can store a lot of key value pairs
*/

var myName = "Carbos"; // can be used anywhere
console.log(myName);
myName = 8; // can set variables to diff data types later

let ourName = "Protein and Hp Up"; // used within the scope of where you declared that
console.log(ourName);
const pi = 3.14; // CONSTANT variable

var a;
console.log(a);

console.log(50 % 3);
console.log();

/**
 * It is still possible to mutate a "const" array using index
 * To ensure that a variable can never be changed, use Object.freeze(VARIABLE)
 */
const UNCHANGEOBJECT = {
    PI: 3.14
};
Object.freeze(UNCHANGEOBJECT);

try {
    UNCHANGEOBJECT.PI = 99; // object can no longer be changed
} catch(ex) {
    console.log(ex);
}
console.log(UNCHANGEOBJECT);
