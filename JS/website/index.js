//////// Basics
// console.log(`Hello!`);
// console.log(`Learning Js`);

// window.alert(`This is an alert`)
// window.alert(`Leraning Js`)

// This is a comment 

/*
this
is
a
multi line
comment
*/

// document.getElementById("myH1").textContent = 'Hello!';
// document.getElementById("myP").textContent = 'I am Learning Js';



//////// VARIABLES
// variable = A container that stores a value.
// 1. declaration let x;
// 2. assignment  x = 100;

// let x;
// x = 100;
// or
// let x =  100;
// console.log(x);

//// number variable
// let age = 25;
// let price = 10.10;
// let gpa = 9.3;

//// string variable
// let firstName = "Anand"
// let food = "Biriyani"
// let Email = "anand@lyrostech.com"

//// boolean variable
// let online = true;
// let forSale = true;
// let isStudent = true;

// let fullName = "Anand";
// let age = 26;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled in college: ${isStudent}`;



//////// ARTHIMETIC OPERATORS
// arthemetic operators = operands(values, variable, etc.)  operators(+ - / * ) 

// let students = 30;
// students++;
// students--;
// // students = students + 1; //31
// // students = students - 1; //30
// // students = students / 2; //15
// // students = students * 2; //30
// // students = students ** 3; //27000
// // students = students % 3; //0 remainder
// console.log(students); 

// let studentss = 31;
// let extraStudentss = studentss % 3; //1 remainder
// console.log(extraStudentss); 



//////// How to accept user input
// 1. Easy way = window prompt -> window.promt
// 2. Professional way = HTmL textbox

// Easy way
// let username;
// username = window.prompt(`What is your username?`)
// console.log(username);

// Professional way

// Html
// <h1 id="myH1">Welcome!</h1>
// <label>User name: </label> 
// <input id="myText" /> <br /><br /> 
// <button id="mySubmit">submit</button>

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     username = document.getElementById("myH1").textContent = `Hello ${username}!`;
// }



//////// TYPE CONVERSION
// Type conversion = change the datatype of a value to another

// let age = window.prompt("What is your age?");
// age = Number(age)
// age = age + 1;
// console.log(age, typeof(age));

//////// CONST
// const = A variable that can't be changed once assigned

// Html
// <h1>Enter the radius of the circle:</h1>
// <label>Radius: </label> 
// <input id="myText" /> <br /><br /> 
// <button id="mySubmit">submit</button>
// <h3 id="myH3"></h3>

// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + `cms`
// }



/////////// MATH
// Math = built in object that provides a collection of properties and methods

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x); //if number is 3.5 then o/p 4 , if number is 3.4 then o/p is 3
// z = Math.floor(x); //if number is btw 3.0 to 3.9, then o/p is 3
// z = Math.ceil(x); //if number is btw 3.1 to 3.9, then o/p is 4
// z = Math.trunc(x); //returns intezer part by removing fractional part
// z = Math.pow(x,y); // x to the power of y
// z = Math.sqrt(x); // square root of x
// z = Math.log(x); // log value of x
// z = Math.abs(x); gives absolute value if it is negative value
//z = Math.sign(x); gives the sign of the number, if it is 0 then o/p is 0 
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);



//////// RANDOM NUMBER GENERATOR

// let randomNumber = Math.floor(Math.random()*6) +1; //this will generate numbers btw 1 to 6
// console.log(randomNumber)

// lets generate random number between 50 to 100
// let min = 50;
// let max = 100;
// let randomNumber = Math.floor(Math.random()*(max - min)) + min;
// console.log(randomNumber);



////////IF  ELSE

// let checkAge = window.prompt(`Enter your age`);

// if(checkAge >= 18){
//     console.log(`You can vote`)
// }
// else{
//     console.log(`You cannot vote`)
// }



////////TERNARY OPERATOR 
// Ternanry operator = A shortcut to if{} and else statements
// Syntax = Variable basedon a condition ? codeIfTrue : codeIfFalse;

// let age = 17;
// let announcment = age>18 ? `Watch the film.` : `Don't watch the film.`;
// console.log(announcment);


// let isStudent = false;
// let circular = isStudent ? `Enroll for class` : `Don't enroll for the class`;
// console.log(circular);


// let purchaseAmount = 99;
// let discount = purchaseAmount >=100 ? 10 : 0;
// finalAmount = purchaseAmount - purchaseAmount*(discount/100);
// console.log(`your final amount is ${finalAmount}/-`);



////////METHOD CHAINING
// Method chaining = Calling one function after another in one continuous line od code.

// let username = window.prompt(`Enter your name`);

//--------No method chaining--------
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();

// username = letter + extrachars;
// console.log(username);


//--------Method chaining--------
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);



////////SPREAD OPERATOR
// Spread Operator = ... Allows an iterable such as an array or string to be spreaded into separate elements
// (Unpacks the elements)

// let Numbers = [1, 2, 3, 4, 5];

// let maxNum = Math.max(...Numbers); //unpacks and separates the elements in the array.
// let minNum = Math.min(...Numbers); //unpacks and separates the elements in the array.

// console.log(maxNum);
// console.log(minNum);

