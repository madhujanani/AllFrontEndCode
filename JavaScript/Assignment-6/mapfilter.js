// function filterdem(age){
//     return age>=18;
// }
// const ages =[12,24,56,34,89,7,17,67]
// const result = ages.filter(filterdem);//just fiters based on condition
// console.log(result);
// console.log(ages);
// //==================================//
// function mapdem(age){
//     return age*2;
//     return age>=18;// use map for doing operations rather for condition
// }
// const age =[12,24,56,34,89,7,17,67]
// const result1 = age.map(mapdem);//checks condition
// console.log(result1);
// console.log(age);
// //===============reduce======================//
// //function reducedemo( sum,num){}//same as line 19.different ways to declare
// let reducedemo = function (sum,num){//function expression-other way to declare function
//     return  sum+=num;
// }
// const lstnum =[2,3,4,5,5,6,7,8,10]
// const res=lstnum.reduce(reducedemo);
// console.log(res);
// console.log(lstnum);
// //==============callback================================//
// function greet(nam){
//     console.log(`hi ${nam}`)
//     }
// function callme(){
//     console.log("heelo callback")
//     greet('madd')
// }
// callme(greet)
// //=====================arrow fonction==================//
// function ff (){} //same line 36,37
// var ff =function(a,b){
//     return a+b;
// }
// var ff=(a,b)=>{return (a+b)}//arrow function [37-39] in 1 line
// var n =[3,5,6,6,7,9]
// console.log(n.map(ff))
//======================prototype ==========================
let animal={
    eats:true
}
let rabbit={
    jump:true    
}
rabbit._Proto_=animal;// proto we can see only in browser
console.log(rabbit.jump);
console.log(rabbit.eats)
;

