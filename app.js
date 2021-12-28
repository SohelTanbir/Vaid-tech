
// load data from api 
function fetchData() {
    const http = new XMLHttpRequest();
    http.open("get", "https://date.nager.at/api/v2/publicholidays/2020/US");
    http.send();
    return http.onload = function () {
       return  JSON.parse(http.responseText)
    }
}
let apiData = fetchData();

// show final output in UI 
function displayData (inputDate){
    // user input data ready for final calculation
    const userData = {
        date:'',
        month:'',
        year:'',
        hours:'',
        minutes:''
    }
    // split user input data
    const splitDate = inputDate[2].split("T");
    const splitTime = splitDate[1].split(":");

// set user input data in a userData object
    userData.hours = splitTime[0]
    userData.minutes = splitTime[1]
    userData.year = inputDate[0];
    userData.month = inputDate[1];
    userData.date =splitDate[0]

    // get final output from calculation method
    const api_data=  calculation();

    // create date object 
    const date  = new Date();
    // pass data to countdown method 
    let  output =  countDown(userData, api_data)
//    setInterval(()=>{
//      output =  countDown(userData, api_data)
//    }, date.getSeconds())

    // select table id to show output in table
    const table = document.getElementById("table");
    let tr = `
    <tr>
        <th>Event Name</th>
        <th>Date</th>
        <th>Present Date</th>
        <th>Event left</th>
    </tr>
    `;
    for (let i = 0; i < apiData().length; i++) {
        tr += innerHTML = `
        <tr>
        <td>${apiData()[i]?.name}</td>
        <td>${apiData()[i].date}</td>
        <td>${inputDate}</td>
        <td> ${output.days} days ${output.hours} hours ${output.minutes} min</td>
        </tr>
    `
    }
    table.innerHTML = tr;

} 

// count down date
function countDown(inputData ,api_data ){
    let days, hours , minutes = '';
    if(inputData.date >= api_data.date){
        days = inputData.date - api_data.date;
        console.log('days = ',days)
    }else{
        alert("invalid date!");
    }
    if(inputData.hours < 12){
        hours = inputData.hours;
        console.log('hours = ',hours)
    }else{
        alert("invalid hours!");
    }
    if(inputData.minutes > 0){
        minutes = 60 - inputData.minutes;
        console.log('minutes = ',minutes)
    }else{
        alert("invalid minutes!");
    }
    
return {days, hours, minutes}

}

// calculation date and time 
function calculation(){
    const apiDate = {
        date:'',
        month:'',
        year:'',
        hours:'12',
        minutes:'00'
    }
    const trimDate = apiData()[0].date.toString().split("-");
    apiDate.year = trimDate[0];
    apiDate.month = trimDate[1];
    apiDate.date = trimDate[2];
    return apiDate
}

// submit action  btn
document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const userDate = document.getElementById("date").value;
    if (userDate) {
        displayData(userDate.split("-"));
    } else {
        alert("Please Select a Date!")
    }
})

