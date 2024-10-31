/*
Code output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return (reset a device's position to the beginning of a line of text)
\t tab
\b backspace
\f form feed (page break/ next page)
*/


// using escape character \
var myStr = "I am a \"double quoted\" string inside \"double quotes\"!";
console.log();
console.log(myStr);

var strConcat = "Veridian forest first. " + "Pewter City second.";
var strLongConcat = "Little Root start. " + strConcat;
console.log(strLongConcat);
strLongConcat += " Mt Moon next." +  "then Route" + 123 + ".";
console.log(strLongConcat);

strLength = strLongConcat.length;
console.log("string length: " + strLength);

// indexing
console.log("Indexing: " + strLongConcat[0]);

/*
Strings are immutable
You cannot change one character of a string by its index
If you want to change a string, you will have to change the whole thing.
*/
// this is not possible
var myStr = "Jello World";
myStr[0] = "H";
console.log(myStr); // stays the same

var otherStr = "Hello there";
console.log(otherStr[otherStr.length - 1]);

function wordBlanks (noun, adjective){
    var result = "";
    result += "The" + " " + adjective + " " + noun;
    return result;
}
console.log(wordBlanks("chair", "big blue"))

