var row =null;

function showAll(){
    var dataEntered =retrieveData();
    //console.log(dataEntered);
    var readData =rdDtaFrmLocalStorage(dataEntered);
    //console.log(readData)
    if (dataEntered== false) { // if the data entered in the form is empty from line29 then give msg in browser 
        msg.innerHTML ="please enter Data !"
    } else {
        if (row == null) {
            insert(readData);
            msg.innerHTML="Data Inserted"
    
        } else {
            update();
            msg.innerHTML="Data Updated";    
        }
    }
    document.getElementById("form").reset(); //automatically clear the form .still we can use the reset in  the form manually.but this do automatically 
}
//To retrive data from form-create
function retrieveData(){
    var book =[
    Title=$("#bookTitle").val(),
    Author=$("#bookAuthor").val(),
    Year=$("#bookYear").val(),
    ]
       // to validate the form field is not empty
    if (book.includes("")) {//("")means empty string so false
        return false;
    } else {
        return book;
    }



}
//data in localStorage-read
function rdDtaFrmLocalStorage(dataEntered){
    
    Tit =localStorage.setItem("bookTitle",dataEntered[0]);
    Auth =localStorage.setItem("bookAuthor",dataEntered[1]);
    Yr =localStorage.setItem("bookYear",dataEntered[2]);
    
    // getting values from local to table
    var arrloctoTab =[
    tle= localStorage.getItem("bookTitle",Tit),
    atr= localStorage.getItem("bookAuthor",Auth),
    yer= localStorage.getItem("bookYear",Yr),
    ]
    return arrloctoTab;
}

//inserting in the table
function insert(readData){
    var row = datatable1.insertRow();
    // var cell1=row.insertCell(0);
    // var cell2=row.insertCell(1);
    // var cell3=row.insertCell(2);
    // var cell4=row.insertCell(3);
    // cell1.innerHTML="1";
    // cell2.innerHTML=readData[0];
    // cell3.innerHTML=readData[1]; 
    // cell4.innerHTML=readData[2];
    //this many lines can be replaced
    if (  row.insertCell(0)==null) {
        let i=1;
        row.insertCell(0).innerHTML=i;
    } else {
        row.insertCell(0).innerHTML=i++;
    }
    row.insertCell(1).innerHTML=readData[0];
    row.insertCell(2).innerHTML=readData[1];
    row.insertCell(3).innerHTML=readData[2];
    row.insertCell(4).innerHTML= `<button>Read</button>`
    row.insertCell(5).innerHTML= `<button onclick = edit(this)>Edit</button>`;
    row.insertCell(6).innerHTML= `<button onclick= remove(this)>Delete</button>`;
}
function edit(td){
    row =td.parentElement.parentElement;
    document.getElementById("bookTitle").value=row.cells[1].innerHTML;
    document.getElementById("bookAuthor").value=row.cells[2].innerHTML;
    document.getElementById("bookYear").value=row.cells[3].innerHTML;
}
function update(){
    row.cells[0].innerHTML=document.getElementById("bookTitle").value;
    row.cells[1].innerHTML=document.getElementById("bookAuthor").value;
    row.cells[2].innerHTML=document.getElementById("bookYear").value;
    row = null;
}

function remove(td){
        var answer=confirm("Are you sure you want to delete this book details ?")
        if (answer ==true) {
        row=td.parentElement.parentElement;
        document.getElementById("datatable1").deleteRow(row.rowIndex);//remove particular row
   //   document.getElementById("datatable1").remove();//will remove table 
    }

}





