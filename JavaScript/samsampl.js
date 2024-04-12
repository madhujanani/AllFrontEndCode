// function swap(x ,y){
//     let tmp =x;
//     x=y;
//     y =tmp;
// }
// console.log(typeof swap)//function is also a type in javascript
// console.log(swap.length)//number of arguments
// console.log(swap.prototype)//by default function is  object  with 2 parameters(length and prototype--will only work in browser not in nodethats y empty {})
// // function have 3 methods----1)apply()
// //========================================
// //if we have multiple object just we can change the object name and use it here person is object
// let person ={
//     firstname:"david",
//     lastname:"Miller",
//     getName:function(){
//         console.log(this.firstname + ":"+this.lastname)
//     }
// }
//     let f =person.getName.bind(person)
//     setTimeout(f,1000);// its binding with person object and providing the name.

//     //person.getName();//get david miller
    
//     //setTimeout(person.getName,1000)//error as it is out of that function
//     setTimeout(function(){ //directly giving the function will work but easy is binding it with bind ()
//         person.getName();
//     },1000)

// function greet(greeting,message){
//     return `${greeting} ${this.firstname} ${this.lastname}.${message}`
// }
// let result =greet.apply(person,["Hello","How are you"])//apply need array to pass argument
// let result1 =greet.call(person,"Hello","How are you")//call() dont need array
// console.log(result);console.log(result1)
// //============example 2==========
// //spread operator
// //===================
// let oddNum =[1,3,5];
// let numbers =[2,4,6,...oddNum]
// let number =[2,oddNum,4,6,...oddNum]// we can give spread operator in any place but we cant do that in rest operator
// console.log(numbers);console.log(number);
// let spreadodd =[...oddNum]; // here we can modify new things but wont affect the real one
// spreadodd.push(9);
// console.log("Spread wont change the original oddnum:"+oddNum);
// console.log("Spread:"+spreadodd);
// let newodd = oddNum;//here we can modify new things it will affect the real one as well
// newodd.push(7)
// console.log("rest will change the original oddnum:"+oddNum);
// console.log("  :"+oddNum)
// //====================================//
// //2)call()
// //==============
// function add(a,b){
//     return a+b
//     //console.log(this)// this ---global object in node and in browser it is window object
// }
// let res =add.call(this,10,20);
// console.log(res)
//===========================================================//
// function print_first(){//blocking code(synchrnous) we are waiting for 1st to complete
//     let i =0;
//     while (i<23456789){
//     i++;
// }
//     console.log("First");
// }
// function print_second(){
//     console.log("second");
// }
// function print_Third(){
//     console.log("third");
// }
// function print_eveything(){
//     print_first();
//     print_second();
//     print_Third();
// }
// print_eveything()
// //===========================================================//
// setTimeout(()=>{ //non blocking(asyncrous)-callback is a statergy we use to implement asyncronous programming in js
//     console.log("This will display after 3 sec")
// },3000)
// function display(){
//     console.log("Display first")
// }
// display()
//================================================================//
//======dont use this this is callback to resolve we use promise==//
// function getuser(callbck){
//     //let users =[];
//     setTimeout(()=>{ //callback is not blocking and when we called getusers its moving to next line ,nothing in next line so undefined
//         callbck( [
//             {username:'john',email:'john@gmail.com'},
//             {username:'mark',email:'mark@gmail.com'}
//         ])
//     },3000)
//     //return users
// }
// function finduser(username,callbck){
//     //const users =getuser();
//     //const user = users.find(user=>user.username===username);
//     getuser((users)=>{
//         const user = users.find(user=>user.username===username);
//         callbck(user);
//     })
//    // return user;
// }
// //console.log(finduser('john'));
// finduser('mark',console.log);
//==========js-PROMISE=====================//
// let success =true;//if it is false go to reject state
// function getusers(){
//     return new Promise((resolv,rejec)=>{
//         setTimeout(()=>{
//             if(success){
//                 resolv([
//                     {username:'john',email:'john@gmail.com'},
//                     {username:'mark',email:'mark@gmail.com'}
//                 ])
//             }
//             else{
//                 rejec("Failed to get the user list");
//             }
//         },3000)
//     })
// }
// function onResolved(users){
//     console.log(users);
// }
// function onRejected(error){
//     console.log(error);
// }
// const Prom =getusers();
// console.log(Prom)
// //Prom.then(onResolved,onRejected); //line 127-131 and (137&138) are same
// Prom.then(data =>console.log(data))
// Prom.catch(data =>console.log(error))
// //==========================================//

// const doSomthing =async()=>{
//     console.log(await doSomthingAsync())
//}//creating a promise without really creating
//============================//
// var counter; //js will automaticaaly give this line if defineing after console.
// console.log(counter)//var can be hoisted
// var counter =1;

// let counter; //js will automaticaaly give this line if defineing after console.
// console.log(counter)//let is NOT HOISTED so getting error
// let counter =1;
// //============================================//
// let a =10,b=20;
// let result =add(a,b);
// console.log(result)
// function add(a,b){// even though the function is given after console its working so FUNCTION IS ALSO HOISTED.it will automatically takes the function on the top so we get output.
//     return a+b;
// }
//===========================================//
// let name ='John';
// function greeting(){
//     let message ='Hi';// accessing local variable in other nested function
//     function sayHi(){
//         console.log(message)
//     }
//     //sayHi();
//     return sayHi;// we can call inner function using outer function
    
// }
// //greeting()
// let func = greeting();
// func();
//============================================//
// function counter(){
//     var count = 0;
//     function increaseCount(){
//         return count += 1;
//     }
//     return increaseCount;
// }
// var count =counter();
// console.log(count());//we are returning a function so give ()
// console.log(count())
// console.log(count())
//multiple level of inner function
// function outer(){
//     var count =0;
//     setTimeout(()=>{
//         var innerCount =0;
//         count+=1
//         console.log("counter :"+count)

//         setTimeout(()=>{
//             count+=1;
//             innerCount+=1;
//             console.log("counter:" +count+",innerCount ="+innerCount)
//         },1000)
//     },2000)
// }  var outerout = outer();
//     console.log(outerout)
//==============================================================//
// function counter (){
//     var privateCounter =0;
//     function changeBy(val){
//         privateCounter+=val;
//     }
//     return {    //it is an object so .
//         increment:function(){
//             changeBy(1)
//         },
//         decrement:function(){
//             changeBy(-1)
//         },
//         value:function(){
//             return privateCounter
//         }
//     }
// }
// var count =counter();
// count.increment();
// count.increment();
// console.log(count.value());//how many times we run
// count.decrement();
// console.log(count.value());
// //=====================================//

//========================================//
// let details={
//     age:30,
//     name:'Madhu',
//     empId:1234,
//     getDetails:function(){
//         return (`name: ${this.name} age is:${this.age}`)
//     }
// }
// console.log(details.empId)//this os property
// console.log(details.getDetails())//this is called method in objects 
//===================================================================//
// function Person(name ,age,city){
// this.name =name;
// this.age=age;
// this.city=city;
// this.getname =function (){
//     return(`getting all details: name:${this.name} age :${this.age} city :${this.city}`)
// };
// }
// function Manager(salary){
//     this.salary=salary;
//     this.getname =function (){
//         return(`getting all details: name:${this.salary}`)
//     };
//     }
// let emp1 = new Person('ma',20,'salem',);
// let emp3 = new Person('ba',24,'chennai');
// let mang =new Manager(5000)
// console.log(emp1.getname())//gettiong all details
// console.log(emp1)
// mang._proto_=emp3
// //Manager.prototype =Object.create(Person.prototype)//just consider we want opbject structure so converting a function to object
// mang._proto_=emp1.city;
// console.log(mang)
//=======================================================================//
// class Employee{
//     #studname;
//     constructor(studname,stuId){
//         this.#studname=studname;//private as # is there
//         this.stuId=stuId;//public variable
//     }
//     getName(){
//         return this.#studname;
//     }
// }
// let empp =new Employee("sara",235);
// console.log(empp.getName());
// empp.studname="pete";empp.stuId=777;//if we give #in studname it gives error as we are trying to modify  private variable . 
// console.log(empp);//becaz it is public variable and can be accessed anywhere
// console.log(empp.getName());//to access private variable use getName()
// //======================================================================================//


// class person1{
//     constructor (job){
//         console.log("person1 class");
//         this.job =job;

//     }
//     greet(){
//         console.log(`hello:yoir job is ${this.job}`)
//     }
// }
// class person2 extends person1{
//     constructor (name,job){
//         console.log("person2 class");
//        super(job);
//         this.name=name;
//     }
// }
// let per = new person2('mani','bussiness')
// per.greet()
//==================================================//
function add(a,b){
    return a+b;
}
let sum =add(20,30)
console.log(sum)





