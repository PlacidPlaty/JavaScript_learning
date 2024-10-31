// below is an anonymous function, it does not have a name but is assigned to the variable magic
// var magic = function(){
//     return new Date();
// };

// the above can be shortened to:
const magic = () => new Date();


var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [4, 5, 6]));

// the above can be shortened to:
var myArrowConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myArrowConcat([1, 2], [4, 5, 6]));

//eg:
const realNumberArray = [4, 5.6, -9.8, 3.14, 43, 6, 8,34, -2];

const squareList = (arr) => {
    // filter for whole numbers and use the map function
    // the map function takes a function as an arguement
    // x is every element passed by filter which is (4, 43, 6, 8)
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
