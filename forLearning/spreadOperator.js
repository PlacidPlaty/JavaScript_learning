const arr1 = ["JAN", "FEB", "MAR"];

let arr2;
(function() {
    arr2 = arr1; // arr2 is pointing to arr1 instead of copying it
    arr1[0] = "potato"
})();
console.log(arr2);

const arr3 = ["JAN", "FEB", "MAR"];

let arr4;
(function() {
    arr4 = [...arr3]; // contents of arr3 is spread out and added to arr4
    arr3[0] = "potato" // now changing arr3 does not change arr4
})();
console.log(arr4); 
