// there are two type memory
// 1. stack and heap memory

// 1. About Stack memory
//  all the primitive are store in stack memory
// change will not effect to its original values

// Example:-
let stack = 200;
let stack2 = stack;
console.log(stack2)

function stackk(a) {
    return a  +1;
}

let a = 33;
let ans = stackk(a);
console.log(ans) // 34
console.log(stackk(a)); // 34

console.log(a) // 33

// 1. About Heap memory
// it basically store non primitives values
// change will effect to its original value
// Example:-
let arr = [1, 2, 3, 4];
let arr2 = arr;


console.log(arr2); // [2, 3, 4, 5]

console.log(arr); // [1, 2, 3, 4]