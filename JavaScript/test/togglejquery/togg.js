let result =localStorage.getItem("itemvalue")
$(document).ready(function(){
    alert(result)
    $("#div1").html(result)
})