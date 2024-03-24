// on the basis How data is Placed in Memory And How we Can access the data in memory
// on the above basis DataType is Categories is Two Type

// Primitive Types
// 7 Types : String , Number , Boolean , null(number) , undfined , symbol , Bigint
//Actual chnage is not affect on orignal values.
// it pass the value of copy of origial value .


// Non primitive types

// Array , Object ,Function ,
//  it pass the reference of value
// change will effect on the original value
// Example;-

const arr = ["shaikh", "Majid", "Tarique"];
console.log(arr)

const myObj = {
    name: "Majid",
    age: 25,
    city: "Lahore"

}
console.log(myObj.name);

const myFunc = function abc() {
    console.log("This Is My Function");
}

// console.log(myFunc);
myFunc();
