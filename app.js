
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

// store user input data
const userData = {
    date: '',
    month: '',
    year: '',
    hours: '',
    minutes: ''
}
// show final output in UI 
function displayData(inputDate) {

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
    setInterval(function () {
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
     <th>API Date </th>
     <th>Event left</th>
 </tr>
 `;
        for (let i = 0; i < apiData().length; i++) {
            tr += innerHTML = `
     <tr>
     <td>${apiData()[i]?.name}</td>
     <td>${apiData()[i].date}</td>
     <td> ${days} days ${hours} hours ${minutes} min ${seconds} Second</td>
     
     </tr>
 `
        }
        table.innerHTML = tr;
    }, 1000)
}

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
        document.querySelector(".start").addEventListener("click", startBirthdayCounter );
    } else {
        alert("Must be select a date and time !");
    }
    // document.getElementById("date").value = '';
    document.getElementById("submit-btn").disabled = true;
})

// start calculation of 
// 25-7 || 29-2
function birthdayCounter() {
    // create date 
    const d = new Date();
    const cDate = d.getDate();
    const cMonth = d.getMonth() + 1;
    const cHours = d.getHours();
    const cMinutes = d.getMinutes();

    let days = 0;
    let hours = Math.abs(23 - userData.hours);
    let minutes = 59 - cMinutes

    // check date/days
    // if (userData.date >= cDate) {
    //     days = userData.date - cDate;
    // } else if (userData.date < cDate) {
    //     days = 30 - (cDate - userData.date);
    // }
    // calculation month 
    if (userData.month >=cMonth && userData.date > cDate) {
        days = ((userData.month - cMonth) * 30) - (30 - userData.date);

    } else if (userData.month <= cMonth && userData.date <= cDate) {
        if(userData.month == cMonth){
            days =365 -( cDate-userData.date);
            console.log(365 -( cDate-userData.date))
        }else if(userData.month < cMonth){
            days =365 - ((30 - userData.date) + parseInt((12-userData.month)*30))
        }
    }
    setInterval(function () {

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
        // display output in UI
        document.querySelector(".days").innerHTML = `${days} days`;
        document.querySelector(".hours").innerHTML = `${hours} hours`;
        document.querySelector(".minutes").innerHTML = `${minutes} minutes`;
    }, 1)
   
}
// start birthday counter
function startBirthdayCounter(){
    // start counting
    birthdayCounter();
    // disable start button
    document.querySelector(".start").disabled = true;
}



