// About Number
const score = 200;
// console.log(score)
// console.log(typeof (score));

// const result = new Number(100);
// console.log(result)
// console.log(typeof (result)) // object

// toString method

// const result1 = new Number(100).toString();
// console.log(result1)
// console.log(typeof (result1)) // string
// console.log(score.toString());
// console.log(typeof(score))

// toLocaleString method

// const result2 = new Number(100).toLocaleString();
// console.log(result2)
// console.log(typeof (result2)) // string

// tifixed method

// let n = result2.tofixed(2);

// console.log(n)

// ToPrecision()

const other = 12344.987; // main focus h decimal se pahle wali value ka h
// console.log(other.toPrecision(4));

// Rupiya

const paisa = 1000000;
// console.log(paisa.toLocaleString());// according us dollar

// console.log(paisa.toLocaleString('en-IN'));



//  ************************** MATH FUNCTIONS ************************
//  Math functions which is provided by js
// it renturn type is Object which has multiple function and attributes are available

console.log(Math);

// console.log(Math.PI);

// console.log(Math.E);
// console.log(Math.abs(-4))
// console.log(Math.abs(3))
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1))

// console.log(Math.floor(4.9))

// console.log(Math.max(10, 20, 30, 40, 50));

// console.log(Math.min(10, 20, 30, 40, 50));

// console.log(Math.random());
// console.log(Math.floor(1));

// console.log(Math.pow(2, 3));

// console.log(Math.random()) // value will come b/w 0 to 1 (inclusive 0 but exclusive 1)
// console.log(Math.floor(Math.random() * 10)+1)
// console.log(Math.floor(0));


// console.log(Math.random()) 
// console.log(Math.floor(Math.random() * 100))

let a = Math.random();
console.log(a)
let b = a * 100;
console.log(b)

console.log(Math.floor(b));
