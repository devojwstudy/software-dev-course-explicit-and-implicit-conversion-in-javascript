/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


//let result = "5" - 2;
//console.log("The result is: " + result);
//This correction converts the string to a number
let stringFive="5";
let num5=Number(stringFive);
let result = num5 - 2;
console.log("The result is: " + result);
//let isValid = Boolean("false");
//if (isValid) {
//    console.log("This is valid!");
//}
//This correction converts the Boolean to a false value
let isFalse = "";
let isValid = Boolean(isFalse);
if (isValid) {
    console.log("This is valid!");
}
//
//let age = "25";
//let totalAge = age + 5;
//console.log("Total Age: " + totalAge);
//This correction converts the string to a number
let stringAge = "25";
let numAge=Number(stringAge);
let age = numAge;
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
//Implicit conversion example
console.log("6"*"2");
//Explicit conversion example
let stringSix ="6";
let stringTwo = "2";
let numSix =Number(stringSix);
let numTwo = Number(stringTwo);
let multiplicationResult = numSix * numTwo;
console.log("The result is: " + multiplicationResult);
//Explicit conversion Edge case example
let stringHello= "Hello";
let numHello=Number(stringHello);
console.log("This string is not a number, the output is:"+ numHello);
