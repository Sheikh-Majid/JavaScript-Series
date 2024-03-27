//  definition
// it is specific of code which can be call or excute multiple time which is save our time increase readility of code
// it atake some input and give some output
//example
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Majid");

//return keyboard in function after the return keyword no code or programe will exciute
function add(a, b) {
  return a + b;
}

var result = add(3, 5);
console.log(result); 

// Anonymous Functions:
// You can also create functions without a name,
// known as anonymous functions.These are often used as callbacks or to define functions inline.

// let mera = function (a, b) {
//     console.log(a + b);

// }

// mera(3, 5);

// with return keyword
let mera = function (a, b) {
    // console.log(a + b);
    return a + b;

}

// var result = mera(3, 5);

// console.log(result);

// Arrow Functions:
// var square = (x) => {
//   return x * x;
// };

// var squaredNumber = square(5);
// console.log(squaredNumber);


// Rest operator in function

// function cartPrice(...a){
//     return a + 1;
// }
// console.log(10,2,1,2,1)


// Object in function
 
const Myobj = {
    name: "majid",
    age: 25,
    city: "Lahore"
    
}
function myac(Myobj) {
     console.log(`mera nam ${Myobj.name} hai Aur mai ${Myobj.age} ka rahne wala hu and meriage h${Myobj.city}`)
}

myac(Myobj);


// Array in function

function abcd(arrr) {
     console.log(arrr[1])
}
abcd([10, 29, 30]);