//////// VARIABLE SCOPE
// Variable Scope = Where a variable is recognized and accessible 
// (Local vs Global)


////////LOCAL

// function1();
// function2();

// function function1(){
//     let x = 1; //Local
//     console.log(x);
// }

// function function2(){
//     let x = 2; //Local
//     console.log(x);
// }



////////GLOBAL

// let x = 1; //Global
// let y = 2; //Global

// function function1(){
//     console.log(x);
// }

// function function2(){
//     console.log(y);
// }

// function1();
// function2();



// If we are having local and global variable with same name in the code first preference goes to 'LOCAL'
// let x = 1; //Global
// let y = 2; //Global

// function function1(){
//     let x = 3; //Local
//     console.log(x);
// }

// function function2(){
//     let y = 4; //Local
//     console.log(y);
// }

// function1();
// function2();