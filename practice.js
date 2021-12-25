// welcome to practice JavaScript Programming World

// 1. output in javaScript
const message = 'I am a simple text message';

// document.write(message);
// console.log('output by console.log method');
// window.alert("output by window.alert method");
// window.print("output by window.print method");

// 2. JavaScript Statements
const statement = 10 + 5 - 5 * 2;
// console.log(statement);
var firstName = "Sohel";
var lastName = "Rana";
// console.log('fullName is = ', firstName +' '+lastName);

// 3. comments in JavaScript
/*
    I am a multi line comment
*/
// I am a single line comment

// 4. JavaScript Variables
// there are 3 way to declare variable in Javascript
var one = 'declare variable with var  that is a global scope variable';
let two = 'declare variable with let keyword that is a block scope variable';
const three = 'declare variable with const keyword that is a block constant scope variable';

var age = 21;
var age  // it will not lose it's value
const PI = 3.1416;

// use of const array
const array1 = ['name1', 'name2', 'name3', 'name4'];
array1.name5;
// console.log(array1);
array1['name4'] = 'name5'
// console.log(array1);
// 5. operator in JavaScript
// arithmetic operator
const a = 10;
const b = 20;
const sum = a + b;
const sub = a - b;
const divide = a / b;
const remainder = a % b;

// increment operator
let number = 10;
number++
// let x = 50
// let y = 6;
//  x+=y;
//  const result =x+y;
// const fullName =  firstName+=lastName;
// console.log(x.length?'welcome':y)
// console.log('remainder is = ', x%y)
let x = 5;
let z = x ** 2;
// console.log('exponentiation = ', z)
// console.log(Math.pow(x, 2))

// 6. JavaScript Functions

function greeting(name) {
    console.log('Welcome ' + name)
    return 0
    console.log('Welcome ' + name)
}


// 7. JavaScript Object
const person = {
    name: 'sohelrana',
    height: '5.2" ',
    weight: 58,
    eyeColor: 'Black',
    age: function (age) {
        return typeof (age) == 'number' ? age : 'not number'
    }
}
// console.log(person.age(50))

// 7. JavaScript Event
function IncrementUser() {
    let countUser = parseInt(document.querySelector('.add-user').innerText);
    document.querySelector('.add-user').innerText = countUser + 1
}
function decrementUser() {
    let countUser = parseInt(document.querySelector('.add-user').innerText);
    if (countUser != 0)
        document.querySelector('.add-user').innerText = countUser - 1
}

// 8.  JavaScript String
let txt = "We Love Bangladesh ";
// console.log('length = ', txt.length)
// 8.  JavaScript String Methods
const sliceString = txt.substring(7, 0);
const newTxt = txt.replace(/bangladesh/i, "JavaScript");

// console.log(newTxt.toUpperCase())
// console.log(newTxt.charAt())
// split method
let splitArray = txt.trim().split(" ");
// console.log(splitArray)

// indexOf method 
const str = 'I Love JavaScript Programming Language';
// console.log(str.indexOf('Love'))
// console.log(str.lastIndexOf('JavaScript'))
let str2 = "Please locate where 'locate' occurs!";
// console.log(str.lastIndexOf("Programming", 20));

// console.log(str.includes('Programming'));
// console.log(str.startsWith('I'));
// console.log(str.startsWith('Love', 2));

// 9. JavaScript Template Literals
let template = `
name: sohelrana,
profession:web developer
`// console.log(isNaN(10))

// 10. JavaScript Number Methods
const number1 = 1234.111;
// console.log( typeof number1.toString())
// console.log( number1.toFixed(1))
// console.log( number1.valueOf())
// console.log( number1.valueOf())
// console.log(Number(true))
// console.log( typeof parseInt("10.10"))
// console.log( parseInt("10.10"))
// console.log( parseFloat("10.10"))
// console.log( typeof Number("10"))
// console.log( Number.MAX_VALUE)

// 11. JavaScript Arrays
// An array is a special variable,which can hold more than one value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ["sohel Rana", "Shakil Ahmed", "Al mamun"]
// console.log('initial array',numbers)
// // numbers[0]= 'Sohel Rana';
// numbers.push(10)
// console.log('add item in  end ', numbers);
// numbers.pop()
// console.log('remove item from  end ', numbers);
// numbers.shift()
// console.log('remove item from  front ', numbers);
// numbers.unshift(0,1)
// console.log('add  in front ', numbers);
// console.log('total array element= ', numbers.length);
let text = "<ul>"
for (let i = 0; i <= names.length; i++) {
    text = text + "<li>" + names[i] + "</li>";
    document.querySelector(".demo").innerHTML = text
}
text += "</ul>";
// const arr = new Array("sohel", "rana");
// console.log(arr)
// document.querySelector(".demo").innerHTML =names.join('-');
// console.log(names)
// console.log(names)
// console.log(names.splice(1,2,"added", "added2"));
// console.log(names.concat(numbers))

// console.log(names.concat(numbers))
// console.log(names.splice(0,0,{name:'Rasel',p:'developer'}));
// console.log(names.push("rasel"))
// console.log(names.slice(0,4));
// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));

// forEach method

// numbers.forEach(function(item, index,array){
//     console.log('item = '+ item)
//     console.log('index number = ',index)
// })

// map method
// numbers.map(function(item, index,array){
//     console.log('array item = '+ item)
// })
// filter method
// const result = numbers.filter(function(item, index,array){
//     if(item < 3){
//        return item
//     }
// })
// const result = numbers.reduce(function(total, item, index,array){
//     return total+item
// })
// console.log(result)
// console.log(names.indexOf("sohel Rana"))
// var arr = [1,2,3]
// var arr = [4,5,6]
// console.log(arr)

// 12. JavaScript Date Objects
// date object get methods
const d = new Date();
// console.log(d.getFullYear())
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[d.getMonth()])
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getDay())

// date object set methods
// console.log(d.setFullYear(2020))


//JavaScript Math Object
// const num = 11
// console.log(Math.PI)
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.trunc(num))
// console.log(Math.sqrt(num))
// console.log(Math.round(Math.random()*10))

//13.JavaScript Loops
// const message2 = "I love my family"
// let i = 3
// for(; i<=100; i++){
//     console.log('Hi',message2)
// }

// for in loop
// const persons = {name:'sohelrana', age:21}
const count = [1, 2, 3, 4, 5, 6, 7, 8]
// for(let i in count){
//     console.log(count[i])
// }
// for of loop
const language = 'JavaScript';
// for(let l of language){
//     console.log(l)
// }
// for(let i= 0; i<=language.length; i++){
//     console.log(language[i])
// }

// JavaScript While Loop
let i = 0;
// while(i<=count.length){
//     console.log('count  = ',i);
//     i++
// }
// JavaScript Do While Loop
// do{
//     console.log("do while loop is executed");
//     console.log("Loop is working stop because condition is false");
//     i++;
// }while(i>10)

// JavaScript Break and Continue
// for(let i = 0; i<=10; i++){
//     if(i===11){
//         console.log('loop break')
//         continue;
//         // break;
//     }
//     console.log('loop continue')
//     console.log(i)
// }
// console.log(typeof null)
// console.log(typeof undefined)
let stn = '22';
let nts = 25;
// console.log('string ', stn, typeof stn)
// console.log('string to number convert ',stn,  typeof Number(stn))
// console.log(' number to string convert ',nts,  typeof nts.toString());

// 14. JavaScript Regular Expressions
// let txt1 = "Javascript Language";
// console.log(txt1.search("Javascript"))
// let text1 = "Visit W3Schools!";
// console.log(text1.search("W3Schools"))
// console.log(text1.search(/w3Schools/i))

// 15. JavaScript Errors - Throw and Try to Catch
const p='1111';
try {
    if(p == "") throw "is empty";
    if(isNaN(p)) throw "is not a number";
    x = Number(x);
    if(p > 10) throw "is too high";
    if(p < 5) throw "is too low";

  }
  catch(err) {
    // console.log(err)
  }
// 16.JavaScript Scope
/*
JavaScript has 3 types of scope:
Block scope
Function scope
Global scope
*/
// block scope
{
    let name1 = "sohel"; // block scope variable
}

// function scope / local scope
function fnScope(){
    let team = 'Bangladesh'; //local variable
    // console.log(name)
}
fnScope()

// global scope variable
 team = 'I am global scope variable value';
 var team;


//  carName = "Volvo";  // throw ReferenceError
//  let carName;
//  carName = "Volvo";  // throw SyntaxError
//  const carName;           
// "use strict";
// myFunction();
// console.log(public)
// function myFunction() {
//  var public=  3.14;   // This will also cause an error because y is not declared
// }
// 17. JavaScript this keyword
const obj = {
    name:'car',
    color:'blue',
    weight:110,
    display:function(){
        console.log(this.weight)
    }
}

function show(){
    // "use strict"
    console.log(this)
}

// console.log(this)
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
// console.log(  person1.fullName.call(person2));  // Will return "John Doe"

// check array or not 
// console.log(Array.isArray(count))

// Javascript arrow function
// const sums = (x, y)=> x+y;
// console.log(sums(10, 20))

// JavaScript Classes
class Student {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    sayName(f){
        return this.fname + " " + this.lname + " " +f
    }
}
// const Student1 = new Student("sagor", "ahmed");
// const Student2 = new Student("Jamal ", "kamal");
// console.log(Student2.sayName( "sohel"))

// JavaScript Promise
// const myPromise = new Promise(function(myResolve, myReject){
//     setTimeout(function(){ myResolve("I Love Js")},2000)
// });
// myPromise.then(function(val, err){
//     console.log(val, err)
// })
// Default Parameter Values
function defaultParameter(x, y= 10){
    // console.log(x+y)
}
defaultParameter(10);
// Function Rest Parameter
function restParameter(...age){
    let sum = 0;
    age.map(item =>{
        sum+=item
    })
}
restParameter(10, 20, 30, 40);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// async function myDisplay() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//       setTimeout(function() { myResolve("Welcome to async function"); }, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
// javascript object
const ob = {};
ob.firstName = 'Sohel';
ob.lastName = "Rana";
// const json = JSON.stringify(ob);
// console.log(json)
// console.log('object ', JSON.parse(json))
// const obj2 = new Object();
// obj2.name="sohel";
// console.log(obj2)
// fns(10, 20)
// const fns = (x, y) => x * y; 

// JavaScript arguments object

// function arguments(){
// console.log(arguments)
// }
// arguments(10,20,30,40)
// const maxs = [1,2,3,4]
// console.log(Math.max(1,2,3));  
// console.log(Math.max.apply(null, maxs));  
function checkGlobal(){
    ag = 'i am inside in a function but I am global variable because I am declared without keyword';
}
// checkGlobal()
// console.log (ag)
// javascript inheritance
class Car{
    constructor(name){
        this.name = name;
    }
    show(){
        console.log(this.name)
    }
}
class Model extends Car {
    constructor(name){
        super();
    }
    show(name){
        console.log('inherited',this.name)
    }
}

// let myCar = new Model("BMW");
// myCar.show();

function myDisplayer(some) {
    console.log(some);
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }


  // javascript callback function
  function displayResult(result){
      console.log(result);
  }

  function sum1 (a, b, callback){
      console.log("called main function")
        let sum = a + b;
        callback(sum)
  }
//   sum1(10, 10, displayResult)
// synchronous js
// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },2000);
// console.log("4")

// HTML DOM-- Document Object Model

document.getElementById("demo").style.background = 'red';
document.getElementById("demo").style.padding = '10px';
document.getElementById("demo").style.fontSize = '30px';
document.getElementById("demo").style.textAlign = 'center';


const container = document.getElementById("container");
const ul = document.createElement("ul");
const li = document.createElement("li");
  li.innerText ="I am created by DOM" + "<br>";
  li.innerText ="Second element";
  container.appendChild(ul);
  ul.appendChild(li);
console.log(container.children);
container.removeChild(ul)
console.log(container.children[0].style.color= 'yellow')
// container.onmouseover = function(){
//     container.style.background = 'blue';
//     container.style.color = '#fff'
// }

// console.log(document.getElementsByTagName("h3"))
// console.log(document.getElementById("container").firstChild)
let span = document.createElement("span");
const textNode = document.createTextNode("text node");
span.appendChild(textNode)
ul.appendChild(span)