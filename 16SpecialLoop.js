// const { M } = require("vite/dist/node/types.d-aGj9QkWt");

const num = [1, 2, 3, 4, 5, 6];
for (const val of num) {
    // console.log(val)
}

// const str = ["A", "B", "C", "D", "E", "F"];
// const str = "Majid shaikh"
// for (const i of str) {
//  console.log(i)
// }

// Map Function
// value presnt in form key and value
// Alway be unique No duplicate eleemnt allow

// const map = new Map();

// map.set("name", "Majid");

// map.set("age", 25);

// map.set("city", "Lahore");

// console.log(map.get("name"));
// console.log(map)
// console.log(map.keys())

// for (const [key , value] of map) {
//     console.log(key ,":-", value)
// }


//Foreach loop

const str = ["Java", "python", "cpp", "Ruby", "Long"];

// 1--
// str.forEach((i) => {
//     console.log(i)
// })


// 2---
// str.forEach((i) => (console.log(i)))


// 3---
// str.forEach(function (bb) {
//     console.log(bb);
// })

// 4---
// function print(item) {
//     console.log(item);
// }

// str.forEach(print)

// 5---
// str.forEach((item, index, str) => {
//     console.log(item, index, str);
// })
//6--
// str.forEach((item, index, ) => {
//     console.log(item, index, );
// })

// Apply for each loop in mutiple object

const obj = [
    {
        name: "Majid",
        laguage : "Hindi"
    },
    {
        name: "Majid2",
        laguage : "Hindi2"
    },
    {
        name: "Majid3",
        laguage : "Hindi3"
    }

]

// obj.forEach((item) => {
//     console.log(item.name, item.laguage)
// })
// obj.forEach((item) => {
//     console.log(item.name)
// })

// console.log(obj);
// obj.forEach((item)=>(console.log(item)))
// Note ;--
//foreach loop koi value return nhi kar raha tha
// isiliye humne filter method ko use kiya jo ki value return karta h




// filter method in javascript

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//1--
//  const num11 = arr.filter((value) => {
//     return value % 2 === 0;
// })
// console.log(num11)

//2--
// const num12 = arr.filter((value) => {
//      console.log(value)
//     return value >= 5
// })
// console.log(num12)

// if we don't use {} so we don't need to write return keyword

//Example
// 3--

// const table = arr.filter((value) => (value % 3 == 0))
// console.log(table)

// use filter method

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    published: 1960
  },
  {
    title: "1984",
    genre: "Dystopian",
    published: 1949
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    published: 1925
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    published: 1997
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    published: 1951
  }
];

const userbooks1 = books.filter((bk) =>(bk.genre === "Fiction"));
const userbooks = books.filter((bk) =>(bk.published > 1950));
// console.log(userbooks);

// Important
//  Map methods
// map chaining 
const numm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = numm.map((vale) => (vale * 2)).map((val) => (val + 2)).filter((i)=>{return i<=10})
// console.log(newNum)

// reduce method

const numm1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const i = 0;
const newNum1 = numm1.reduce((acc, val) => (acc + val), i);
console.log(newNum1)

// expalin
// acc act as variable.
// val act as actual value.
// where i has inital value it is need to asign for start reducer it is taken as one time in the begining


