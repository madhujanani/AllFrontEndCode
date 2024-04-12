
function reset(){
    document.getElementById("txtnum1").value ="0";
    document.getElementById("txtnum2").value ="0";
    document.getElementById("sum").value ="0";
}
function add(){
    let num1=parseInt(document.getElementById("txtnum1").value); //use parse int to convert into integer so we can add otherwise it will consider this as a string.
    let num2=parseInt(document.getElementById("txtnum2").value); 
    let sum1 = num1 +num2;
    document.getElementById("sum").value =(sum1);
}
function sub(){
    let num1=parseInt(document.getElementById("txtnum1").value); //use parse int to convert into integer so we can add otherwise it will consider this as a string.
    let num2=parseInt(document.getElementById("txtnum2").value); 
    let sum1 = num1-num2;
    document.getElementById("sum").value =(sum1);
}

function mul(){
    let num1=parseInt(document.getElementById("txtnum1").value); //use parse int to convert into integer so we can add otherwise it will consider this as a string.
    let num2=parseInt(document.getElementById("txtnum2").value); 
    let sum1 = num1*num2;
    document.getElementById("sum").value =(sum1);
}

function div(){
    let num1=parseInt(document.getElementById("txtnum1").value); //use parse int to convert into integer so we can add otherwise it will consider this as a string.
    let num2=parseInt(document.getElementById("txtnum2").value); 
    let sum1 = num1 /num2;
    document.getElementById("sum").value =(sum1);
}


