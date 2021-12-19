// welcome to practice JavaScript Programming World

// 1. output in javaScript
const message = 'I am a simple text message';

 // document.write(message);
// console.log('output by console.log method');
// window.alert("output by window.alert method");
// window.print("output by window.print method");

// 2. JavaScript Statements
const statement = 10+5-5*2;
// console.log(statement);
var firstName ="Sohel";
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

 const PI =3.1416;

 // use of const array
const array1 = ['name1', 'name2','name3', 'name4'];
array1.name5;
// console.log(array1);
array1['name4'] = 'name5'
// console.log(array1);
// 5. operator in JavaScript
// arithmetic operator
const a = 10;
const b = 20;
const sum = a+b;
const sub = a-b;
const divide = a/b;
const remainder = a%b;

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

function greeting(name){
    console.log('Welcome '+ name)
    return 0
    console.log('Welcome '+ name)
}


// 7. JavaScript Object
const person = {
    name:'sohelrana',
    height:'5.2" ',
    weight:58,
    eyeColor:'Black',
    age:function(age){
        return typeof(age) == 'number'?age:'not number'
    }
}
// console.log(person.age(50))

// 7. JavaScript Event
function IncrementUser(){
    let countUser = parseInt(document.querySelector('.add-user').innerText);
    document.querySelector('.add-user').innerText = countUser+1
}
function decrementUser(){
    let countUser = parseInt(document.querySelector('.add-user').innerText);
    if(countUser!=0)
        document.querySelector('.add-user').innerText = countUser-1
}

// 8.  JavaScript String
let txt = "We Love Bangladesh ";
console.log('length = ', txt.length)
// 8.  JavaScript String Methods
const sliceString = txt.substring(7,0);
const newTxt = txt.replace(/bangladesh/i,"JavaScript");

// console.log(newTxt.toUpperCase())
// console.log(newTxt.charAt())
// split method
let splitArray = txt.trim().split(" ");
console.log(splitArray)