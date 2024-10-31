const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));

/**
 * using Rest operator, replace the argument with ...
 */
const sumRest = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sumRest(1, 2, 3, 4, 5)); // you can add any number of arguments
