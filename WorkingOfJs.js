// JavaScript runs behind the scenes in a web browser or a JavaScript engine like Node.js. Let's break down how it works in simple Hinglish (Hindi + English) with an example:

// 1. **Parsing:**
//    - Jab hum ek web page open karte hain, browser uske HTML, CSS aur JavaScript code ko padhne lagta hai. JavaScript engine ya interpreter JavaScript code ko parse karta hai, arthat code ko samajhta hai.

// 2. **Execution Context:**
//    - Jab browser JavaScript code ko parse karta hai, wah execution context create karta hai. Yeh context variables, functions, aur unki values ko store karta hai.

// 3. **Execution:**
//    - JavaScript code ko execute karne ke liye, engine line-by-line code ko padhta hai aur use interpret karta hai.
//    - Jab koi function call hota hai, ek naya execution context create hota hai, aur control us function ke andar chala jata hai.
//    - Jab function khatam hota hai, control wapas vahan se bahar aata hai jahan se function call hua tha.

// 4. **Event Loop:**
//    - JavaScript mein ek event loop hota hai jo dekhta hai ki kya kuch events hain jo execute ho sakte hain, jaise ki click events, mouse movements, etc.
//    - Event loop constantly monitor karta hai ki kya kuch events queue mein hai, aur agar hota hai to unko execute karta hai.

// 5. **Example:**
//    ```html
//    <!DOCTYPE html>
//    <html>
//    <head>
//      <title>JavaScript Example</title>
//    </head>
//    <body>
//      <button id="myButton">Click Me</button>
//      <script>
//        // JavaScript code
//        document.getElementById('myButton').addEventListener('click', function() {
//          console.log('Button clicked!');
//        });
//      </script>
//    </body>
//    </html>
//    ```
   
//    Is example mein, JavaScript code browser ke dwara parse hota hai. Jab button par click hota hai, event loop us event ko detect karta hai aur us event ke listener ko execute karta hai, jisme console par "Button clicked!" print hota hai.

// Yeh tha ek simple tareeke se JavaScript ka kaam karte hue samjhaane ka. JavaScript ek powerful language hai jo web development mein kaafi important hai.


// var scope checking
// var are global and functional scope

// var scope    = 20;

// function test() {
//     var scope = 30;
//     console.log(scope);
// }

if (true) {
    var scope1 = 40;
    // console.log(scope);
}

// test();
console.log(scope1)