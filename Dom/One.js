console.log("Hello")


const app = document.getElementById("title");
app.style.backgroundColor = "green"
app.style.padding = "15px"
app.style.marginTop = "10px"
app.style.borderRadius = "10px"
app.style.cursor = "pointer"
app.addEventListener("click", function() {
    app.style.backgroundColor = "red"
});

// console.log(app.textContent) // inner text  get or get karne ke liye and html tag ko consider karta h
// console.log(app.innerHTML) // its  get and set all element prsent along with  tag
// console.log(app.innerText) // inside context ko get or set karne ke liye
// Note ;--
// innerHTML me text ke sath sath html ko bhi support karta
// innerText and innerContent me content ko support karta h but HTML content ko support nhi karta h

app.innerHTML = "<strong>Hello, World!</strong>";
// console.log(app.innerHTML)



const app1 = document.querySelector(".para");
// console.log(app1);

app1.style.backgroundColor = "red"
app1.style.padding = "15px"
app1.style.marginTop = "10px"
app1.style.borderRadius = "10px"
app1.style.cursor = "pointer"

app1.addEventListener("click", function() {
    app1.style.backgroundColor = "green"
});

// const app2 = document.querySelector("ul");

// app2.style.backgroundColor = "red"

// const app3 = app2.querySelector("li");

// app3.style.backgroundColor = "green"
// app3.innerText = "Hundred"
// app3.style.cursor = "pointer"


// app3.addEventListener("click", () => {
//     app3.style.backgroundColor = "yellow"
    
// })



// quarySlector All

// const res = document.querySelectorAll("li");
// console.log(res); // it return NodeList it is not Array like similar array so that we can't map
// if we apply map function first we have nodlist into Array
// otherwise on NodeList we can ForEach loop it is available on Prototype

// res[1].style.color = "blue";

// res.forEach((item) => {
//     item.style.color = "red";
// })

// res[1].style.color = "blue"; //overwrite color


const resp = document.getElementsByClassName("item");
console.log(resp);

const arr = Array.from(resp);
 
arr.forEach((i) => {
    i.style.color = "yellow";
    console.log(i)
})

// Note:--
// jb hum quaryselectorall use karte h to return humko nodelist milta jo ki similar to array but not exactly arry
// foreach loop available in quaryselectorall but map function are not available
// map function available in array
// we need to NodeList into Array      by    Array.from("NodelistName")

// Second thing
// getElementByClass
// it will return the Html colection , in which there is no avalile any loop forEach , Map function
// So, we convert into Array 
// the we can use loop like for ForEach or Map function.

