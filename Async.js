// js is signal threaded language
// code are excucted line by line

// blocking vs non-blocking

// "Blocking" aur "non-blocking" async code me do tarah ke approach 
//hote hain jo code execution ko describe karte hain:

// Blocking: Blocking code ek aise code ko refer karta hai jo jab tak ek particular 
/// pura nahi hota, tab tak code execution ko rukta hai aur dusre tasks ko execute karne
// ki permission nahi deta hai.Iska matlab hai ki agar koi task time - 
//consuming hai ya kisi external resource ka response wait kar raha hai,
 //toh code execution wait karega jab tak response na mile.
 //Iska matalb hai ki agar ek task ke liye code execution wait kar raha hai, 
 //to dusre tasks ko execute karne ki permission nahi hai.

// Non-blocking: Non-blocking code me, jab ek 
//task execution ke liye wait kar raha hota hai, tab bhi code 
//execution ko rukne ki jagah, dusre tasks ko execute karne ki permission 
//milti hai.Iska matlab hai ki agar koi task time - 
//consuming hai ya kisi external resource ka response wait kar raha hai, 
//to code execution doosre tasks ko execute karne ke liye available hoti rahegi.




// Handlers ka matlab
// function without name and  pass with refrence


console.log("start")
setTimeout(() => {
    console.log("Mai 3 second baad excute hone wale hu")
}, 3000)
console.log(end)