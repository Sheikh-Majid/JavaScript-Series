console.log("Start from here");


function RandomColor() {
    const hex = "012345679ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}


const bt1 = document.querySelector("#start")
const bt2 = document.querySelector("#stop");
let clearIntervall;

const StartChangingColor = function () {
    
    clearIntervall = setInterval(changeBgColor, 1000)

    function changeBgColor() {
        document.body.style.backgroundColor = RandomColor();
    }
}

const StopChangingColor = function () {
    clearInterval(clearIntervall)
}


bt1.addEventListener("click", StartChangingColor)

bt2.addEventListener("click", StopChangingColor)
// console.log(RandomColor())
// console.log(Math.random())
// console.log(Math.floor(Math.random()*16));