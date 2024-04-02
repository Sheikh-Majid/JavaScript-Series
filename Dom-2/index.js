console.log("starting server...")

const parent = document.querySelector(".parent")
// console.log(parent) // bada wala dabba show karega
// console.log(parent.children)// daba ke andar wale ki elemnt
// console.log(parent.children[2].innerHTML) // element me jo text h index ke hisaab se


// for (let i = 0; i < parent.children.length; i++){
//     console.log(parent.children[i].innerHTML)
// }

// moving from parent to child
// parent.children[3].style.backgroundColor = "green"

// console.log(parent.firstElementChild.innerHTML)

// console.log(parent.lastElementChild.innerHTML)

// moving from child to parent

// const dayone = document.querySelector(".item");
// console.log(dayone.innerHTML)
// console.log(dayone.parentElement)
// console.log(dayone.nextElementSibling.innerHTML)


//nodelist

// console.log("node :", parent.childNodes)

// create a new Element

const myElement = document.createElement("div");
console.log(myElement)
myElement.className = "main"
myElement.id = Math.round(Math.random() * 10)
myElement.setAttribute("title", "generated title")
myElement.style.backgroundColor = "green"
myElement.style.padding = "15px"
// myElement.innerHTML= "Shaikh Majid" or
const addText = document.createTextNode("Shaikh Majid Tarique")
myElement.appendChild(addText);

document.body.appendChild(myElement)




