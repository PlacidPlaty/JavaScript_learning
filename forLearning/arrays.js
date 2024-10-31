var myArray = ["Quincy", 1, ["John", 23]];

console.log(myArray[2]);

var anotherArray = [1, 2, 3, 4];
anotherArray[2] = 5;
anotherArray[5] = 6;
console.log(anotherArray);

/*
.push(). Add element to the end of element
*/
var pushArray = [ ["John", 23], ["Paul", 25] ];
pushArray.push(["Herrm", 35]);
console.log("push: " + pushArray);

/**
 * .pop()
 */
var popArray = [1, 2, 3, 4];
popArray.pop();
console.log("pop: " + popArray)

/**
 * .shift() shifts the elements to the left by one, returning the first element
 */
var shiftArray = [1, 2, 3, 4];
var removedElement = shiftArray.shift();
console.log("shift: " + removedElement);

/**
 *  unshift() adds element to the front of array
 */
var unshiftArray = ["a", "b", "c", "d"];
unshiftArray.unshift("z");
console.log("unshift: " + unshiftArray)
