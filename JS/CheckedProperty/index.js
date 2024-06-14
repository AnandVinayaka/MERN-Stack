////////CHECKED PROPERTY
// .checked = property that determines the checked state of 
//            an Html chechbox or radio button


const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are SUBSCRIBED`
    }
    else{
        subResult.textContent = `You are NOT SUBSCRIBED`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying through Visa card`
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying through Master card`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying through PapPal`
    }
    else{
        paymentResult.textContent = `You must select a payment option`
    }
}

