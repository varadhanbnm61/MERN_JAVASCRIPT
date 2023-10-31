//Step 1:
//create a XHR object.
//var request=new XMLHttpRequest();
// //step2
// //open a connection to the server
// request.open("GET","https://restcountries.com/v3.1/all",true)
// //step3
// //initiating a bridge to the server
// request.send();//used to send a request to the server
// //step4:
// //server response
// request.onload=function()
// {
// var data=request.response;
// //console.log(data);
// var result=JSON.parse(data);
// //console.log(result);
// console.log(result[0].name.common);



// //console.log(result[0].area)
// //for accessing multiple values use looping
// for(var i=0;i<result.length;i++)
// {
//    console.log(result[i].flags.svg)
// }
// }


// var a=5;
// var b=6;
// console.log(a+b);

// var a1=5;
// var b1=9;
// console.log(a1+b1);
//------
//function example:
// function add(a,b)
// {
// console.log(a+b);
// }
// add(5,6);
// //---
// function mul(a,b){
//    console.log(a*b);
// }
// mul(5,6);
// //--
// var num1=10;
// var num2=20;
// function mul(a,b)
// {
//    console.log(a*b);
// }
// mul(num1,num2);



//function always have return
//return-to reduce the number of time code executed


//function name is userdefined
//function is used for dry codes 

//DRY-do not repeat yourself
 //===
// function multi(a,b,c){
//     return a*b*c;
// }
// console.log(multi(1,2,3));
// //Print odd numbers in an array

// var arr=[1,2,3,4,5,6,7,8,9,7,8];
// var result=[];

// function odd(arr){
// for(var i=0;i<arr.length;i++){


// if(arr[i]%2!==0){
//     result.push(arr[i]);
// }

// }
// return result;
// }
// console.log(odd(arr));


//-

//Anonymous:
//function without proper names
// var result=[];

// var a=function (arr){
// for(var i=0;i<arr.length;i++){


// if(arr[i]%2!==0){
//     result.push(arr[i]);
// }

// }
// return result;
// }
// console.log(a([15,18,19,20,21,22,23])); 


//iife-immedietly invoked function expression
// ({})()
// (function (a,b){

// console.log(a+b);
// })(1,2)



//
// var result=[];
// (function (arr){

// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i])
//     }
// }
// console.log(result)
// })([1,2,3,4,5,6,7,89])



//Arror function introduced in ES6

//var variablename=()=>{}variablename()

//-
// var result=[];
// var odd=(arr)=>{
    
//  for(var i=0;i<arr.length;i++){
//  if(arr[i]%2!==0){
//  result.push(arr[i]);
//  }
//  }
//  return result;  
// }
// console.log(odd([1,2,3,4,5,6,7,8,9]));
//-

// function toTitleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console.log(toTitleCase("WELCOME TO MY CODING JOURNEY")); 

// function tasktwo(str){

    
// }

//-----day5

// let obj1={name:"person 1",age:5};
// let obj2={age:5,name:"person 1"};
// //convert the object to JSON
// let json1=JSON.stringify(obj1);
// console.log(json1);
// let json2=JSON.stringify(obj2);
// console.log(json2);
// if(json1===json2){
//     console.log("these two are same properties");
// }
// else{
//     console.log("not same");
// }


//-

console.log(a);
var a=10;
//output:undefined

console.log(a);
let a=10;
//output:error
//var undefined output
//let,const are same error
// var vs let vs const
//HOISTING:



//Global,Block
//var-global
//let,const-global
