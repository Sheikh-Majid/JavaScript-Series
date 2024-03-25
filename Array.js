// About Array
// In JavaScript, an array is a special type of variable that can store multiple values. These values can be of any data type, including numbers, strings, objects, or even other arrays. Arrays are a fundamental data structure
// in JavaScript and are commonly used for storing and manipulating collections of data.

// Shallow Copy;--
// it created a new Array object it copyied the reference of original array (such as Non Primitive DAtatype)
// Data will be reflect to the original array

// Deep Copy:--
// it copied the actual data from the original but not a refference
//  change will not affected to the original array

// In JavaScript, an array is a special type of variable that can store multiple values.These values can be of any data type, including numbers, strings, objects, or even other arrays.Arrays are a fundamental data structure
// in JavaScript and are commonly used for storing and manipulating collections of data.

// ARRAYs:--
// parentesis ()
// Square[]
//Currley Braket{};

// Decareation
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(typeof (arr));

// AnotherMethod
const mrArr = ["Majid", "Shaikh", "Tarique"];

// const arr1 = new Array(1, 22, 33, 44, 55);
// console.log(arr1);
// console.log(typeof (arr1))
// arr1.push(66); // add element at last of array
// console.log(arr1);
// arr1.pop(); // remove the last element

// arr1.unshift(66) // add element first index
// arr1.shift() // remove the first index element


// slice vs Splice

// slice :-
//  Slice is a array method in js that return new array from original array
// but it is not change the original value 
// it doesnot include last index.
let arr1 = [1, 2, 3, 4, 5, 6];
console.log("A:- ", arr1);

let arr2 = arr1.slice(1 ,4);
console.log("slice value:- ", arr2);
console.log("B:- ", arr1);

// Splice;-
//  Slice is a array method in js that return new array from original array
// but it is change the original value of array and include last index.
// example:-

console.log("Splice start from here :-- ")
let arr3 = [1, 2, 3, 4, 5, 6];
console.log("A:- ", arr3);

let arr4 = arr3.splice(1 ,4);
console.log("splice value:- ", arr4);

console.log("B:- ", arr3);

// Conclusion:
// Use slice() when you want to extract a portion of an array without modifying the original array.
// Use splice() when you want to modify the contents of an array by removing, replacing, or adding elements in place.