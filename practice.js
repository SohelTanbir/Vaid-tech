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
// console.log('length = ', txt.length)
// 8.  JavaScript String Methods
const sliceString = txt.substring(7,0);
const newTxt = txt.replace(/bangladesh/i,"JavaScript");

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
const numbers = [1,2,3,4,5,6,7,8,9];
const names = ["sohel Rana","Shakil Ahmed", "Al mamun"]
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
for(let i=0; i<=names.length; i++){
    text = text + "<li>" + names[i] + "</li>";
     document.querySelector(".demo").innerHTML = text
}
text+= "</ul>";
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
const num = 11
// console.log(Math.PI)
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.trunc(num))
// console.log(Math.sqrt(num))
console.log(Math.round(Math.random()*10))

//13.JavaScript Loops
// const message2 = "I love my family"
// let i = 3
// for(; i<=100; i++){
//     console.log('Hi',message2)
// }
// for in loop

const persons = {name:'sohelrana', age:21}
const count = [1,2,3,4,5,6,7,8,9]
for(let i in count){
    console.log(person)
}