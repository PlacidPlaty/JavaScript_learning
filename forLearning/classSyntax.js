class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
// create a new SpaceShuttle
var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet)

// another example
class Vegetable {
    constructor(name){
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name)

/**
 * getters and setters
 */
class Book {
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

const mobyDick = new Book("Herman Melville");
let authorName = mobyDick.writer;
console.log(authorName)
mobyDick.writer = "F.Scott Fitzgerald"; // setting new author
authorName = mobyDick.writer
console.log(authorName)

