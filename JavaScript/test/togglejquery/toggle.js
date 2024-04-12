function send(){
    let textvalue =$("#txt1").val()
    localStorage.setItem("itemvalue",textvalue)
}
$(document).ready(function(){
    $("button").click(()=>
    {
        $("p").hide();
        alert($("button").html())
    if($("button").html() == 'hide')
    {
        $("p").hide();
        $("button").html('show')
    }
    else{
        $("p").show();
        $("button").html('hide')
    }
    })
})




// $(document).ready(function(){
//     $("button").click(()=>
//     {
//         $("p").toggle()
//     })
// })
