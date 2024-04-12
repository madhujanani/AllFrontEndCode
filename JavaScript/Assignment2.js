console.log("Script working");


var msg1=document.getElementById("msg1")
var msg2=document.getElementById("msg2")
var msg3=document.getElementById("msg3")
var no_of_guesses =0;
var result = 7; 
var guesses_num =[];

function reset(){
    document.getElementById("txtnum1").value ="0";
    msg1.textContent="Restart the game";
    msg2.textContent="Number of guess :"+0;
    msg3.textContent="Guessed numbers are :"+0;
}

function guess(){

    var user_guess =document.getElementById("txtnum1").value;
    if(user_guess<1 || user_guess>10){
        alert("Enter a number between 1-10");
    }
    else{
        guesses_num.push(user_guess);
        no_of_guesses=no_of_guesses+1;
        if(user_guess < result){
            msg1.textContent="you guess is low";
            msg2.textContent="Number of guess :"+no_of_guesses;
            msg3.textContent="Guessed numbers are :"+guesses_num;
        }
        else if(user_guess > result){
            msg1.textContent="you guess is high";
            msg2.textContent="Number of guess :"+no_of_guesses;
            msg3.textContent="Guessed numbers are :"+guesses_num;
        }
        else if(user_guess == result){
            msg1.textContent="You Won -Congratzz";
            msg2.textContent="The Number is :"+result;
            msg3.textContent="You guessed : "+ no_of_guesses + " Guesses ";
        }
    }
}