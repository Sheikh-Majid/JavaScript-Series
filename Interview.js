// console.log("First number is" + num);
// var num = 100;
// console.log("first number is" + num)
// console.log("Second number is" + num2);
// var num2 = 200;
// console.log("Second number is" + num2);

// var ,vs let vs const

// var are functional scopes or global scopes
var b = 10;
function example() {
     var x = 10;
    if (true) {
        var x = 20; // This modifies the original 'x'
        console.log(x); // Output: 20
        console.log(b)
    }
    console.log(x); // Output: 20
    console.log(b)
}
// example();


//  console.log(x)


//  it is Peresnt in new version javaScript
// and let is provide block Scoping
// it value may be change
function example() {
    let x = 10;
    if (true) {
        let x = 20; // This is a different 'x' within this block
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10 (outside the block)
}
example();
//  console.log(x) // it will give eeror


// const
// const is provide block Scoping
// it similar to let
// but once value assign it will again



// TypeOf NaN
// let a = NaN;
// console.log(a);
// console.log(typeof (a))

// example of NaN vale
let result = "hello" / 2; // Trying to divide a string by 2
console.log(result); // Output: NaN


//Passed by Value:
//When you pass a primitive data type (like numbers, strings, or booleans) to a function, a copy of the value is created and passed to the function. Any changes made to the parameter inside the function do not affect the original value outside the function.

//Example:

// function increment(num) {
//     num += 1;
//     console.log(num); // Output: 11
// }

// let x = 10;
// increment(x);
// console.log(x); // Output: 10 (original value remains unchanged)


// Passed by Reference:
// When you pass an object (including arrays and functions) to a function, a reference to the original object is passed. This means that changes made to the object's properties inside the function will affect the original object outside the function.

// Example:
// function changeProperty(obj) {
//     obj.name = "John";
//     console.log(obj); // Output: { name: 'John' }
// }

// let person = { name: "Alice" };
// changeProperty(person);
// console.log(person); // Output: { name: 'John' } (original object is modified)


// An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and then immediately executed or invoked. It's often used to create a private scope for variables, preventing them from polluting the global scope.

// Here's a simple explanation with an example:

// javascript
// Copy code
// (function() {
//     // This function is immediately invoked
//     console.log("This is an IIFE");
// })();


// this keyword i js
//
// In JavaScript, the this keyword refers to the object that is currently executing the function where this is used.
// Its value depends on how and where a function is called.

//Clouser in js
// In JavaScript, a closure is a combination of a function and 
// the lexical environment within which that function was declared.Closures 
// allow functions to retain access to variables from their containing scope even
//  after the parent function has finished executing.

// Example
// function Large() {
//     let lar = "large value"
//     function small() {
//         console.log(lar);
//     }
//     return small;
// }

// let ans = Large();
// ans();


// DOM (Document Object Model):
// The DOM represents the structure of an HTML document as a tree - like structure of objects.Each HTML element, attribute, and text node in the document is represented as an object in the DOM tree.JavaScript can manipulate the DOM to
// dynamically update the content, structure, and style of a web page.

// BOM (Browser Object Model):
// The BOM represents additional objects provided by the browser environment, such as the window object.It allows JavaScript code to interact with browser features like controlling the browser window,
//     managing history, handling cookies, and more.