// ###Data Types 



// 1. Variable Declaration and Initialization:
// Write a program that declares variables of different data types (integer, float, character, string, boolean). 
// Initialize them with appropriate values and display these values using console output.

// let integerNumber = 14;
// let floatNumber = 14.1197;
// let char = 'a';
// let string = "Anand";
// let boolean = true;

// console.log(boolean);
// console.log(integerNumber);
// console.log(string);
// console.log(floatNumber);
// console.log(char);



// 2. Type Conversion:
// Create a program that demonstrates implicit and explicit type conversion. 
// Include examples where you convert an integer to a float, a float to an integer, a string to an integer, and an integer to a string. Print the results to the console.

// let integerNumber = 14;
// let floatNumber = 14.1197;
// let string = "Anand";

// Implicit

// Integer to Float
// let number1 = 14
// let number2 = 14.1197
// output = number1 + number2;
// console.log(output);
// console.log(typeof(output));

// Integer to Float
// let number1 = 14
// let number2 = 14.1197
// output = number1 + number2;
// console.log(output);
// console.log(typeof(output));

// String to Integer
// let string = "14"
// let number = "14.1197"
// output = string - number;
// console.log(output);
// console.log(typeof(output));

// Integer to String
// let number = 14
// let string = "14"
// output = number + string;
// console.log(output);
// console.log(typeof(output));

// Explicit

// const intTofloat = parseFloat(integerNumber);
// const floatToint = Number(floatNumber);
// const stringToint = Number(string);
// const intTostring = String(integerNumber);

// console.log(typeof(intTofloat));
// console.log(typeof(floatToint));
// console.log(typeof(stringToint));
// console.log(typeof(intTostring));



// 3. Data Type Operations:
// Develop a program that performs various operations on different data types. 
// For example, add two integers, concatenate two strings, and perform logical operations on boolean variables. 
// Display the results of each operation.

// let number1 = 1;
// let number2 = 2;
// add = number1 + number2;
// console.log(add);

// let string1 = "Anand";
// let string2 = "Vinayaka"
// string = string1 + string2;
// console.log(string);

// let x , y = 3;
// let and = (x<4 && y>3);
// let or = (x<5 || y>2);
// let not = !(x==y);
// console.log(and);
// console.log(or);
// console.log(not);




// 4. Array and List Manipulation:
// Write a program that initializes an array or list with a set of integers. 
// Perform operations like finding the maximum, minimum, sum, and average of the elements. Print the results to the console.


// let sampleArray = [1,2,3,4,5,6,7,8,9,10];

// // Maximum element
// let maxElement = Math.max(...sampleArray);
// console.log(maxElement);

// // Minimum element
// let minElement = Math.min(...sampleArray);
// console.log(minElement);

// // Sum of the elements
// let arrayLength = sampleArray.length;
// let sum = 0;

// for (i=0; i<arrayLength; i++){
//     sum = sum + sampleArray[i];
// }
// let elementsSum = sum;
// console.log(elementsSum);

// Average of the elements
// let arrayLength = sampleArray.length;
// let sum = 0;

// for (i=0; i<arrayLength; i++){
//     sum = sum + sampleArray[i];
// }

// let average = sum/arrayLength;
// console.log(average);



// // 5. User Input and Data Type Conversion:
// Create a program that prompts the user to enter their age (integer), height (float), and name (string). 
// Convert these inputs to the appropriate data types if necessary and display them in a formatted string.


// let userName = prompt("What is your name?")
// let userAge = prompt("Enter your age")
// let userHeight = prompt("Enter your height in inches")

// console.log(`Hi my name is ${userName}. I am ${userAge} years old. My height is ${userHeight}`)




// ### Switch Case

// 15. Practical Question:
// Write a function that takes a day of the week as input (e.g., "Monday") and 
// logs the corresponding number of the day (e.g., 1 for Monday) using a switch case statement.

// function dayNumber(Day){
//     switch(Day) {
//         case 'Monday':
//             console.log('1');
//             break;
//         case 'Tuesday':
//             console.log('2');
//             break;
//         case 'Wednesday':
//             console.log('3');
//             break;
//         case 'Thursday':
//             console.log('4');
//             break;
//         case 'Friday':
//             console.log('5');
//             break;
//         case 'Saturday':
//             console.log('6');
//             break;
//         case 'Sunday':
//             console.log('7');
//             break;
//         default:
//             console.log('Not a valid day!');
//         } 
// }

// dayNumber("Monday")



// ### Arrow Functions

// 7. Basic Arrow Function:
//Convert the following function declaration into an arrow function:
//```javascript
// function double(x) {
//     return x * 2;
// }
//```
//Call the arrow function with the argument 5 and print the result.

// Arrow function
// const double = (x) => x * 2;
// console.log(double(10));



// 8. Arrow Function with Implicit Return:
// Write an arrow function `isEven` that takes a number and returns `true` if the number is even, and `false` otherwise. 
// Use implicit return for this function. Test the function with the argument 8 and print the result.

// const isEven = (number) =>{
//     if (number % 2 === 0){
//         console.log(`${number} is Even`)
//         return true;
//     }
//     else{
//         console.log(`${number} is Odd`)
//         return false;
//     }
// } 

// let checkEvenOdd = isEven(9);
// console.log(checkEvenOdd);






