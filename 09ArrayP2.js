// Spread Operator with Arrays:

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// concat arrays
// const arr4 = arr1.concat(arr2);

// spread operator best approach for arrays for add
// const arr3 = [...arr1, ...arr2];
// console.log(arr4)
// console.log(arr3)

// example another
// const arr5 = [1, 1, 1, 1, 1, 1, 1,];
// console.log(...arr5, 4, 5);

// Spread Operator with Strings:

// const str1 = "Hello";
// const str2 = "World";

// const str3 = [...str1, ...str2];
// console.log(str3)



// Spread Operator with Function Arguments:

// function abc(a, b, c) {
//     console.log(a + b + c);
// }
// const number = [1, 2, 3];

// abc(...number);

// Spread Operator with Objects:

const obj1 = { name: "majid", addreess: "bisham" }
const obj2 = { ...obj1, age: 20, study: "B.Tech" }
console.log(obj2)


// making Array of
let numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers);

// anothe .from

const arr = [1, 2, 3, 4, 5];
const arr2 = Array.from(arr);
console.log(arr2);

// Array.isArray()

const arr3 = [1, 2, 3, 4, 5];
const arr4 = Array.isArray(arr3);
console.log(arr4);

// Array constructor

const arr5 = new Array(10, 10, 10, 10,);
console.log(arr5)