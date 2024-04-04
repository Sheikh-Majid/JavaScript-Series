console.log("Hellow world");
const body = document.querySelector("body");

// const firstBox = document.querySelector("#white")

const box = document.querySelectorAll(".button")

// firstBox.addEventListener("click" ,()=> (
//      body.style.backgroundColor = "white"
// ))

// console.log(firstBox)
// console.log(box)

box.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(e)
        // console.log(e.target)
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id; 
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id; 
        }
    }
       
       
    )
})