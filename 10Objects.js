// object are blue Print of class
// onject is clection key - value pair in js
// each Key has a String Value
//  each value can be a string , number , function or object
// object are widely use to stroring and manipalatuting the data in js


const obj1 = {
    name: "Majid",
    age: 20,
    job: "Software Engineer",
    email: "admin@example.com",
    DOB: "04-07-2000",
    start: function abc() {
        console.log("Engine Started")
    }

}
console.log(obj1)
// one way
console.log(obj1.age);
// another way
console.log(obj1["name"]);
obj1.name = "shaikh";
console.log(obj1)

// After that value will not change 
// Object.freeze(obj1)
obj1.age = 40;

// console.log(obj1.age);
// console.log(obj1)

// Add element to the colection

obj1.city = "Azamgarh"
obj1["current"] = "Gr Noida"

console.log(obj1)
console.log(obj1.start());
// console.log(obj1.abc);
