// Random number generator

const myButton = document.getElementById("myButton");
const firstRoll = document.getElementById("firstRoll");
const secondRoll = document.getElementById("secondRoll");
const thirdRoll = document.getElementById("thirdRoll");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max) + min;
    randomNum2 = Math.floor(Math.random()*max) + min;
    randomNum3 = Math.floor(Math.random()*max) + min;

    firstRoll.textContent = randomNum1;
    secondRoll.textContent = randomNum2;
    thirdRoll.textContent = randomNum3;
}
