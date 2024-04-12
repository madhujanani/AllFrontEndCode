

//USING FUNCTION
//======================================
// let result =localStorage.getItem((("itemvalue")));
// // document.getElementById("container").innerHTML = result;

//USING JQUERY--for line 6
//==========================
// let result =localStorage.getItem("itemvalue")
// $(document).ready(function(){
//     alert("click ok to see your salary")
//     $("#container").html(result)
// })


//FOR CLASS 
//=====================================
let res =localStorage.getItem("itemvalue");
let res1=JSON.parse(res)
//document.getElementById("container").innerHTML ="Hello   " res1.name+"   You are a awasome    "+res1.design+ "  and proudly getting salary of $  "+res1.sal;
$(document).ready(function(){
        alert("click ok to see your salary")
        $("#container").html("Hello   "+ res1.name+"   You are a awasome    "+res1.design+ "  and proudly getting salary of $  "+res1.sal)
    })



