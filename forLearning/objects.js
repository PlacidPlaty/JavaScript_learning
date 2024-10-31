// objects use properties to reference values
var ourDog = {
    "name": "Jakey",
    "legs": 4,
    "age": 2,
    "friends": ["Those who gave me food"]
};

console.log(ourDog);
// 1. Dot notation can be used to reference a property in an object
console.log(ourDog.name);

// 2. bracket notation can be used to reference a property that has a spacing in it
var menu = {
    "an entree": "hamburger",
    "our side": "veggies",
    "the drink": "water",
    12 : "value is 12"
};

var entree = menu["an entree"];
console.log(entree);
console.log();

var number = 12;
console.log(menu[number]);
console.log();
/* updating value
*/
menu["an entree"] = "salad";
console.log("updating object: " + menu["an entree"]);
console.log();

/**
 * adding property to objects
 */
menu["remarks"] = "not that good";
console.log("adding property: " + menu);
console.log();
/**
 * deleting property from object
 */
delete menu.remarks;
console.log("Delete property:" + menu);
console.log();

/**
 * Check if an object as a property
 */
var newObj = {
    gift: "horse",
    pet: "bird",
    house: "wooden"
};

function checkProperty(inputObject, property){
    if (inputObject.hasOwnProperty(property)){
        return inputObject[property];
    }
    return "Not found";
}
console.log("Check property" + checkProperty(newObj, "lake"));
