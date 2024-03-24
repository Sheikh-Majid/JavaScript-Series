// Create a new Date object with the current date and time
// Note:-- Month Started With 0;

const currentDate = new Date();
console.log(currentDate);

// console.log(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleString()) //best ye wala hai
// console.log(currentDate.toLocaleTimeString());


//Getting Different Date Components
// Get the current year
// console.log(currentDate.getFullYear());

// Get the current month (0-11, where 0 represents January)
// console.log(currentDate.getMonth());

// Get the current day of the month (1-31)
// console.log(currentDate.getDate());

// Get the current hour (0-23)
// console.log(currentDate.getHours());

// Get the current minute (0-59)
// console.log(currentDate.getMinutes());

// Get the current second (0-59)
// console.log(currentDate.getSeconds());

// Get the current millisecond (0-999)
// console.log(currentDate.getMilliseconds());


//Setting Date Components:

// console.log("Setting date start from here...")
// Set the year to 2023
// currentDate.setFullYear(2023);

// Set the month to November (0-11)
// currentDate.setMonth(10); // Note: Month is zero-based

// Set the day of the month to 15
// currentDate.setDate(15);

// Set the hour to 12 (noon)
// currentDate.setHours(12);

// Set the minute to 30
// currentDate.setMinutes(30);

// Set the second to 45
// currentDate.setSeconds(45);

// Set the millisecond to 500
// currentDate.setMilliseconds(500);


// console.log(currentDate);

// console.log(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay());


console.log(currentDate.getMilliseconds());
console.log(Math.floor(Date.now() / 1000));
console.log(Date.now());
console.log(Date.toString())
