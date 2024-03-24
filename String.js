// through new keyword to create String  its String- Object
let y = new String("John");
console.log(y);
console.log(typeof (y));


// another way to create String
const str = "Majid";
const str1 = "shaikh"
console.log(`this is my name are ${str} and Second name is ${str1}`);

// String Prototype is Object
// which contains properties and methods(toLowerCase and Uppercase And length and many more).
// which is accessable to String

// console.log(str1.toUpperCase()); // it will change
// console.log(str1) // it will not change as it is primitive data type

// console.log(str1.length); // length of string
//  console.log(str.charAt(2)) // get element through index
// console.log(str.indexOf("d")); // get index throuhg elemnt


console.log(str1.substring(1, 4));
console.log(str1.slice(2, -1));

let strr = "apple,banana,orange";
console.log(strr.split(","));

// trim(): Removes whitespace from both ends of the string.
let str3 = "   Hello world   ";
console.log(str3.trim()); // Output: "Hello world"

// replace all method
let url = "http://localhos/ap1/v1/20%/register"
console.log(url.replace("20%", "user"))

//  splite method
let ans = "sheikh-Majid-Tarique";

console.log(ans.split("-")); // return an array of strings