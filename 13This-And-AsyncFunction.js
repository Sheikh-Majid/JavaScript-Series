// This keyword
// it is refered to to current Object that is currently excucting
// Global Context:
// In the global context, outside of
// any function, this refers to the global object(window in a browser, global in Node.js).
// console.log(this === window); // in Browser it is true

const person = {
    name: "Majid",
    age: 25,
    city: "Mumbai",
   
    message: function () {
        console.log(`${this.name} welcome to mumbai ${person.name}`);
        console.log(this) // it will print all the value which is present in the courrent object 
    }
    
}
// person.message();

// console.log(person.city);
// console.log(this.age); // undefine
// console.log(this) // {}

// person.city = "Greater Noida"
// person.message();


// Note
//  Browser ke ander ko global object h wo WINDWOW OBJECT HAI
// Window object provide lot of method  and variable to the user automatically

// This keyword is not working in normal function as variable

// function abc() {
//     let a = "HumThisKeywordHai"
//         console.log(this.a)
// }


// ###############   AYSNC FUNCTIONS #########

//  syntax
//  ()=>{}

// Declare a function
const abc = ( a , b) => {
    console.log(this)
    return a + b;
}
console.log(abc(10, 22));

// Note if we use return keyword inside the function then we need curley brakets otherwise No.

// Another way to declare a async function without return keyword
const abc1 = (a, b) => (a + b);
console.log(abc1(2, 3))

// Another way to declare a async function 
const abc2 = (a, b) => a + b;
console.log(abc2(2, 5))


