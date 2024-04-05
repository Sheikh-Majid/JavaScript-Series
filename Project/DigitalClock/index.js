const clock = document.querySelector("#clock")


// the below code fragment can be found in:

setInterval(() => {
    let date = new Date();
    //  console.log(date)
    clock.innerHTML = date.toLocaleTimeString();
},1000)