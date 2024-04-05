

const form = document.querySelector("form");
//const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    const res = document.querySelector("#res")

    if (height === '' || height < 0 || isNaN(height)) {
        console.log(`Please enter valid ${height}`)
        result.innerHTML = `Please , Enter the Valid Height ${height}`
    }
    

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please , Enter the Valid Weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
    
    if (bmi < 18.6) {
        res.innerHTML = `<span>You are Under Weight as a ${bmi}</span>`
    }
    else if (result >= 18.6 && result <= 24.9) {
        res.innerHTML = `<span>You are in Normal Range</span>`
    } else {
        res.innerHTML = `<span>You are Overweight ${result}</span>`
    }
})