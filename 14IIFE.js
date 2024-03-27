//IIFE
// it is stand for imedetially invoke function Expression
// it is used create new Scope for variavle to avoid polutting  ths globle scope
// Or global scope pollution ko hatane ke liye hum IIFE ko used kiya
// basically it is code which is prevent to the other codebase
// it is also known as the imedetailyy invoke function
// syntax are ()()

//example
// Anonymous Functions within parenthesis
// Named IIFE
(function() {
    console.log("This is an IIFE");
})();

// UNNAme IIFE

((name) => {
    console.log(`This is an IIFE in Async function ${name}`);
})("MAjid")

// In  Between Two IIFE We dont a  Semicolio ;  otherwise it give errror
// for normal function like we can pass argument also in IIFE


