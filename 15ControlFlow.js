//  if , else-if , else

const balance = 1000;

if (balance < 500) {
    console.log("Insufficient balance with 500");
} else if (balance < 750) {
    console.log("Insufficient balance with 750");
}

else if (balance < 1000) {
    console.log("Insufficient balance with 1000");
}
else {
    console.log("balance is about 1000")
}

//  Switch Control

const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// falsy values
// false , 0 , -0 , "" , BigInt 0n , null , yndefined , NAN

// truthy values
// "0" , truth , " " , [] , {} , function(){} , "false"

//  Ternary operater

// condition ? true : false

const age = 20;

 age<= 18 ? console.log("You are not eligible for vote") : console.log("You are eligible for vote")