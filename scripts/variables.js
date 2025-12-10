console.log("My script is working");

//string variable
let firstName = "Dayleon";
//number variable
let myAge = 29;
//boolean variable
let isStudent = true;
let isProfessor = false;

//displaying variables
console.log(firstName);
console.log(myAge);
console.log(isStudent);
console.log(isProfessor);

// Mini challenge:
// Create a variable for your last name.
// Create a variable for your height.
// Finally, show each variable separately in the console.

let lastName = "Bell";
let myHeight = 6.0;

console.log(lastName);
console.log(myHeight);

//concatenation
console.log("lastName: " + lastName);
console.log("height: " + myHeight + "cm");

//arithmetic operation
let num1 = 10;
let num2 =20;

let sum = num1 + num2;
let subs = num1 + num2
let mult = num1 * num2;
let div = num1 / num2;

console.log( "-- Arithmetic Operations --" );
console.log( "Addition of num1 " + num1 + " and " + num2 + " is: " + sum );
//interpolation or string template
console.log( `Subtraction of num1 ${num1} and ${num2} is: ${subs}` );
console.log( `Multiplication of num1 ${num1} and ${num2} is: ${mult}` );
console.log( `Division of num1 ${num1} and ${num2} is: ${div}` );
let pi = 3.14;
let radius = 3;
let area = pi * radius * radius;
console.log( `The area of a circle with radius ${radius} is: ${area}` );


//difference between variable and constant
//create the variable
let aVariable = 30
// create and assign the value
let anotherVariable = 50;
console.log(aVariable, anotherVariable);