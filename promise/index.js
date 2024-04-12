

function getData(){

    $.ajax({
        url:'https://gorest.co.in/public/v2/users',
        dataType:'json',
        type:'GET',
        data:{
            key:'value'
        },
    success:data=>{
        console.log(data)
        if (data.length > 0) {
        var temp = "";
        data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + itemData.id + "</td>";//getting from json (id,name...)
        temp += "<td>" + itemData.name + "</td>";
        temp += "<td>" + itemData.gender + "</td>";
        temp += "<td>" + itemData.email + "</td>";
        temp += "<td>" + itemData.status + "</td>";
    });
        //document.getElementById('data').innerHTML = temp;
        $(document).ready(function(){
        $("#data").html(temp)
        })
        }   
    },
    error:err=>{
        console.log(err)
        }
    })
}


