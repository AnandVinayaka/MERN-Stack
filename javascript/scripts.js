function printError(errorId,errorMsg){    
    return document.getElementById(errorId).innerHTML=errorMsg;
}

let pElement = document.getElementById("naveen");
let form11 = document.getElementById("form1")
form11.addEventListener("submit", function(event){
    event.preventDefault()
})

function doValid(){
    // alert("Running good")
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let usernameErr = passwordErr = true;

    if(username === ""){
        pElement.textContent = "please enter your username";
        // let print = printError(pElement,"please enter your username");
        username.appendChild(print);
        return false;
    }
    else{
        return true;
    }
    
}
