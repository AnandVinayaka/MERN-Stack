////////////
// for linking //
// <script src="script.js"></script> //
////////////

////////////
// Values and Variables //
// let firstName = "Anand";
// console.log(firstName);
// variable = firstName, value = "Anand"
////////////


////////////
// DATA TYPES //
// Number: 23,23.0
// Strings: 'Anand',"Anand" 
// Boolean: true or false
////////////

////////////
// let, const //

// let // we can change values or re-assign
// let age = 26;
// age=27;
// console.log(age);

// const // we cannot change values or re-assign, it will throw error.
// const name = 'Anand'
// name = 'vinayaka'
// console.log(name) 
////////////


////////////
// Basic Operators //

// const currentYear = 2024;
// const anandAge = currentYear - 1997;
// console.log("Anand is " + anandAge + " years old."); //we use + operator for concatinating strings


// let x = 10+10;
// x += 10; //x=x+10 ie x = 20 + 10
// console.log(x);

// let x = 10+10;
// x *= 10; //x=x*10 ie x= 20 * 10
// console.log(x);

//Comparision operator //

// const anand = 26;
// const vinayaka = 27;
// console.log(anand>vinayaka);

// const anand = 26.3;
// const vinayaka = 26.4;
// console.log(anand>=vinayaka);
////////////

////////////
// Operator Precedence //

// const anand = 1997;
// const nani = 1998;
// const currentYear = 2024;

// console.log(currentYear-anand > currentYear-nani);
////////////

////////////
// String//

// const myName = "Anand Vinayaka Palyam."
// const age = "26"
// const role = "Software engineer."
// const company = "Lyros technology"

// // const actualString = ("Hello! My name is " + myName + " I am " + age + " old." + " I work in " + company + " as a " + role);
// const actualString = `Hello! My name is ${myName} I am ${age} old. I work in ${company} as a  ${role}`;

// console.log(actualString);
////////////

////////////
// Taking decisions - If and else //

// const age = 16; 

// if (age >= 18) {
//   console.log("You can get driving license!");
// } 
// else {
//   console.log("you cannot get your driving license!");
// }
////////////

////////////
// Type Converstion //

// const year = 1997;

// console.log(typeof(year));
// console.log(String(year)+"/11/14")
// console.log(String(year) + " is my birth year");

// const myname = "Anand"
// console.log(Number(myname)); //gives output as NaN, ie Not a Number

// console.log(String(26)+23);
////////////

////////////
// Type Coercion //

// console.log("I am " + 26 + " years old.");
// console.log("I am " + String(26) + " years old.");
// console.log('26' - '25' + 1); //here minus symbol will convert string to numbers
// console.log('26' + '25' + 1); // but if we use plus symbol it will concatinate
////////////

////////////
// Truthy and Falsy Values //

// Falsy values:
// 0
// ''
// undefined
// null
// NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Anand'));
// console.log(Boolean({})); // an empty object
// console.log(Boolean('')); // an empty string is falsy

// const age = 18;
// if (age) {
//   console.log( "you are major" );
// } else {
//   console.log("you are minor");
// }
////////////

////////////
// Equality Operators //

// const age = 18;
// if (age === 18) console.log("You are a Major");
// console.log(18===18);
// console.log(18===19);

// console.log(18 === '18'); // strict
// console.log(18 == '18'); // loose
////////////

////////////
// Example using else if
// const age = Number(prompt(`What's your age?`));
// if (age >= 60) {
//   console.log('You are a senior citizen!');
// } else if (age === 18) {
//   console.log('You are a teen');
// } else {
//   console.log('you need to wait for few more years');
// }
////////////

////////////
// Logical operators //

// const A = true;
// const B = false;

// console.log(A && B);
// console.log(A || B);
// console.log(!(A));
// console.log(!(B));
////////////

////////////
// Switch statemnt //

// without if/else:

// const day = 'wednesday';

// switch(day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//     console.log('Revise once');
//     break;
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// with if/else:

// const day = 'sunday'

// if (day === 'monday') 
//     {
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//     } 
// else if (day === 'tuesday') 
//     {
//         console.log('Prepare theory videos');
//     } 
// else if (day === 'wednesday' || day === 'thursday') 
//     {
//         console.log('Write code examples');
//     }   
// else if (day === 'friday') 
//     {
//         console.log('Record videos');
//     } 
// else if (day === 'saturday' || day === 'sunday') 
//     {
//         console.log('Enjoy the weekend');
//     } 
// else if (day !== 'monday' || day !== 'tuesday' || day !== 'wednesday' || day !== 'thursday' || day !== 'friday' || day !== 'saturday' || day !== 'sunday') 
//     {
//         console.log('Not a valid day!');
//     }


