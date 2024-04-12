
function submit(){
let details={
    // firstname:document.getElementById("txtnum1").value,    
    // Lastname:document.getElementById("txtnum2").value,
    // Email:document.getElementById("email").value,
    // Phone_number:document.getElementById("phno").value,
    // Age:document.getElementById("sum").value,
    // Place_of_birth:document.getElementById("pob").value,
    // gender:document.getElementById("gender").value,
    firstname :$("#txtnum1").val(),
    lastname:$("#txtnum2").val(),
    Email:$("#email").val(),
    phone:$("#phno").val(),
    Age:$("#sum").val(),
    pob:$(".pob").val(),
    gender:$(".gender").val(),
    
}
console.log(details);
}

