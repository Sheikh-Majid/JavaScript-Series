console.log("dom Part-2")

const ab = document.createElement("li");
ab.className = "lang3"
ab.id = Math.round(Math.random() * 100);
const text1 = document.createTextNode("Student")

ab.appendChild(text1);
console.log(ab)

const content = document.querySelector("ul")

content.appendChild(ab)

// Not a good approch
function addstudent(NameStudent) {
    
    const ab = document.createElement("li");
    ab.innerHTML = `${NameStudent}`
    const res = document.querySelector(".lang")
    res.appendChild(ab)
}

addstudent("yusuf")
addstudent("saifu")


// otimize way
function addstudentOti(name) {
    const ab = document.createElement("li");
    const text = document.createTextNode(`${name}`)
    ab.appendChild(text)
    const res = document.querySelector(".lang")
    res.appendChild(ab)
}

addstudentOti("yusuffff")

// edit

// access the elemnt which you want to edit

const abb = document.querySelector("li:nth-child(2)")
console.log(abb);
// create a new eleemnt 
const newli = document.createElement("li")
// add the content to the new elemnt
newli.innerHTML = "Hello"

// replace the old elemnt with the new one
abb.replaceWith(newli);


// anther way to edit

// first access the elemnt which you want to edit
const ele = document.querySelector("li:first-child")
ele.outerHTML = "<li>Master extra</li>"

// remove the elemnt

const elem = document.querySelector("li:last-child")
elem.remove();