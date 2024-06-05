////////////
// for linking //
// <script src="script.js"></script> //
////////////


////////////
// Activating strict mode //
// 'use strict'; //

// 'use strict'; // without using this line, error is not displayed.
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // observe we removed s from variable
// if (hasDriversLicense) console.log('I can drive!');
////////////


////////////
// Functions //

// defining the function
// function userName(){
//     const surName = "Palyam"
//     const firstName = " Anand"
//     console.log(surName+" "+firstName)
// }

// // calling the function
// userName();

////////////

// function fruitProcessor(grapes,kiwi){
//     console.log(grapes,kiwi);
//     const juice = ("Juice is made with " + grapes + " grapes and " + kiwi + " kiwi fruits");
//     return juice;
// }

// const juiceMixer = fruitProcessor(3,4);
// console.log(juiceMixer);

// we can write like this also 
// console.log(fruitProcessor(3,4));

////////////

// Function declaration vs Function expresssion //

// Function declaration:
// function calcAge(birthYear){
//     return 2024 - birthYear;
// }

// const anandAge = calcAge(1997);
// console.log(anandAge); // we can write like this also " console.log(anandAge(1997)); "

// // Function Expression:
// const age = function calcAge(birthYear){
//     return 2024 - birthYear;
// }

// const vinayakaAge = calcAge(1998);
// console.log(vinayakaAge);

////////////

// Arrow functions //

// function expression:
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
//   }
// console.log(calcAge2(1997));

// Arrow function:
// const calcAge3 = birthYear => 2024 - birthYear;
// console.log(calcAge3(1997));

// Example:
// Arrow function
// const calcAge3 = birthYear => 2024 - birthYear;

// // New Arrow function:
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 60 - age;
//   return (firstName + " retires in " + retirement + " years.");
// }

// console.log(yearsUntilRetirement(1997, 'Anand'));

////////////
// Function calling other function //

// // function-1
// function cutFruitPieces(fruit){
//     return fruit * 5;
// }

// // function-2
// function fruitProcessor(grapes,kiwi){
//     const grapePieces = cutFruitPieces(grapes); //function-2
//     const kiwiPieces = cutFruitPieces(kiwi); //function-2
//     const juice = ("Juice is made with " + grapePieces + " grapes pieces and " + kiwiPieces + " kiwi pieces.");
//     return juice;
// }

// const juiceMixer = fruitProcessor(3,4);
// console.log(juiceMixer);
////////////

////////////
// Array //

// const group1 = ['Bahubali', 'Devasena', 'Katappa'];
// const group2 = ['Ballaladeva','Bijjaladeva','Sethupathi']
// console.log(group1);
// console.log(group2);

// const years = new Array(1991, 1992, 1993, 1994); // we can create a new array
// console.log(years);

// console.log(group1[1]); // we can access each item
// console.log(group2.length); // we can find the length of the array
// console.log(group2[(group2.length)-1]); // we can get the last item of an array


// group2[3] = 'shivagami' //we can add items
// console.log(group2);


// // Basic Array Operations //

// // push //
// group1.push('Avanthika'); // push adds elements to an array
// console.log(group1);

// console.log(group1.push('Shivudu')); // by using push new element to the array, we can also get the length of an array

// // unshift //
// group2.unshift('Maha mantri') // adds new element in the starting of an array
// console.log(group2);

// // pop //
// group2.pop(); // deletes last element of an array
// group2.pop(3); // we can delete any item by accessing their position
// console.log(group2);

// // shift // 
// group2.shift(); //this will remove first element of ana array
// console.log(group2);

// // finding index of an element //
// console.log(group2.indexOf('Bijjaladeva'));

// // includes // 
// console.log(group1.includes('Avanthika')); //checks whether the items are there in the array or not and gives boolean values
// console.log(group1.includes('Sethupathi'));
////////////

















