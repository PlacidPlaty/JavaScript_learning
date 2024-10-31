var voxel = {x: 3.6, y: 7.4, z: 6.54 };
// instead of doing this
var x = voxel.x; // ×= 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// use destructuring
// Get x from voxel, copy to a. Get y from voxel, copy to b. etc...
const {x: a, y : b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54


// for nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 }, 
    tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// destructuring of arrays
// the black space skips over element 3
const [num1, num2, , num4] = [1, 2, 3, 4, 5, 6];
console.log(num1, num2, num4);
console.log();

let p = 8, q = 6;
(() => {
    "use strict";
    [p, q] = [q, p]
})();
console.log("p: " + p);
console.log("q: " + q);
