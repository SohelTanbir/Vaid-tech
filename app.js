
// load data from api 
function fetchData() {
    const http = new XMLHttpRequest();
    http.open("get", "https://date.nager.at/api/v2/publicholidays/2020/US");
    http.send();
    return http.onload = function () {
        return JSON.parse(http.responseText)
    }
}
let apiData = fetchData();

// show final output in UI 
function displayData(inputDate) {
    // user input data ready for final calculation
    const userData = {
        date: '',
        month: '',
        year: '',
        hours: '',
        minutes: ''
    }
    // split user input data
    const splitDate = inputDate[2].split("T");
    const splitTime = splitDate[1].split(":");

    // set user input data in a userData object
    userData.hours = splitTime[0]
    userData.minutes = splitTime[1]
    userData.year = inputDate[0];
    userData.month = inputDate[1];
    userData.date = splitDate[0]

    // get final output from calculation method
    const api_data = calculation();
    // pass data to countdown method
    
    let days = userData.date - api_data.date;
    let hours = Math.abs(userData.hours - api_data.hours);
    let minutes = userData.minutes - api_data.minutes;
    let seconds = 59;
    if (userData.month > 1 && userData.month > api_data.month) {
        days = (userData.date - api_data.date);
        days += (userData.month - api_data.month) * 30;
    } else {
        days = userData.date - api_data.date;
    }
    setInterval(function(){
    if (seconds >= 1) {
        seconds = seconds - 1
    } else if (seconds == 0) {
        if (hours == 0 && minutes == 0) {
            seconds = 0;
        } else {
            seconds = 59;
        }

        if (minutes > 1) {
            if (minutes == 1) {
                minutes = 59;
            } else {
                minutes = minutes - 1;
            }
        } else if (minutes == 1) {
            if (days >= 0 && hours > 0) {
                minutes = 59;
                minutes = minutes - 1;
            } else {
                minutes = 0;
            }
            if (hours >= 1) {
                hours = hours - 1;
                if (days > 0 && hours == 0) {
                    hours = 23;
                    days = days - 1;
                }
            }
            if (days > 0 && hours == 0) {
                days = days - 1;

            }
        }
    }
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
     <td> ${days} days ${hours} hours ${minutes} min ${seconds} Second</td>
     
     </tr>
 `
 }
 table.innerHTML = tr;




}, 1000)



   

}

// count down date
// function countDown(inputData, api_data) {
   
// }


// calculation date and time 
function calculation() {
    const apiDate = {
        date: '',
        month: '',
        year: '',
        hours: '24',
        minutes: '00'
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
    document.getElementById("date").value = '';
})

