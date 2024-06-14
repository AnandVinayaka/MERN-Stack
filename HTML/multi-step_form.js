const Submit1 = document.getElementById('Submit1');
const Submit2 = document.getElementById('Submit2');
const Submit3 = document.getElementById('Submit3');

Submit1.onclick = function(){
    if(Submit1.checked){
        pbarPercent.style.width = "25%";
    }
    else{
        pbarPercent.style.width = "0%"
    }
}

Submit2.onclick = function(){
    if(Submit2.checked){
        pbarPercent.style.width = "65%"
    }
    else{
        pbarPercent.style.width = "20%"
    }
}

Submit3.onclick = function(){
    if(Submit3.checked){
        pbarPercent.style.width = "100%"
    }
    else{
        pbarPercent.style.width = "60%"
    }
}