/**
 * template literals can help create complex strings
 */

const person = {
    name: "Hasbro Corp",
    age: 154
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
