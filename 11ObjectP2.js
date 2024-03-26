//  singleton vs Non -singleton

// singleton;--
// every time it is point same instance or we can say same referece in multiple time
//  it is created with curley Brackets {}
const person ={
    name: "Shaikh",
    Addr: "Bisham",
    age : 20
}
 
const person2 = person
const person3 = person

console.log(person === person2)

console.log(person2 === person3)

// Non-singleton

// every time it is point different instance
// or we can say difference referece in multiple in time.
//  it iscraeted with (new) keyword


// how to filled data in empty object

const obb = {};

obb.name = "Majid";
obb.age = 100
obb.email = "shaikhmajid@gmail.com"
// console.log(obb)

//  object assign function

const obj1 = { 1: "a", 2: "b", }

const obj2 = { 3: "c", 4: "d", }

const obj3 = { 5: "e", 6: "f", }

// const obje4 = Object.assign({Target} , Sources)
const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4)


// from here we get all keys and value 
console.log(obb);

console.log(Object.keys(obj1)); // get all the keys in array
console.log(Object.values(obj1)); // get all the values array
console.log(Object.entries(obj1)); // get all the key and value in between array [[],[]]

// it will true or false depending condtition
console.log(obj1.hasOwnProperty(1))


// Destructuring Object in js'

const course= {
   
    Name: "B.tech",
    duration: 4,
    credit: 4,
    marks: [100, 90, 80, 70, 60]

}

// const {kisko karna destructure yaha likhna h h} = kisme se karna h
const { Name : a, duration, credit, marks } = course;

// console.log(Name);

// console.log(duration);
// console.log(a)



//Note:--
// in the begnninh data transfer and reevcive in form XML (eXtensible Markup Language)
//  it is very difficuit to understnd for a humen that Json Came in Market.



//  JSON  Object
// it is like a language that is used to communicate Program to computer
// it is used when we want to data and recive the data from deffrent system
// it is good read and write for humen
// usely it is written in curley brackets {}
// In Json Both keys and values are are in String format
// Suppose I Have list of friends it way to represent in json file
//{
//   "friends": [
//     {
//       "name": "Alice",
//       "age": 25
//     },
//     {
//       "name": "Bob",
//       "age": 30
//     }
//   ]
// }

