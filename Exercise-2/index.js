const strUtils = require("./CustomModule");

let text = "Hello Shruti Verma";

console.log("Capital:", strUtils.capitalize(text));
console.log("Reverse:", strUtils.reverseString(text));
console.log("Vowels:", strUtils.countVowels(text));
