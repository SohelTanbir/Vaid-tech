$(document).ready(function(){
    
// load data from api 
let apiData;
function fetchData() {

    $.get("https://date.nager.at/api/v2/publicholidays/2020/US", function(data, status){
        apiData = data
     
    });
}
fetchData();
//jquery end
// store user input data
const userData = {
    date: '',
    month: '5',
    year: '',
    hours: '',
    minutes: ''
}
const dateArr = [];
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

// api data 
    for (let i = 0; i < apiData?.length; i++) {
        let dateObj = {
            date: '',
            month: '',
            year: '',
            hours: '24',
            minutes: '00'
        }
        let trimDate = apiData[i].date.toString().split("-");
        dateObj.year = trimDate[0];
        dateObj.month = trimDate[1];
        dateObj.date = trimDate[2];
        dateArr.push(dateObj);
    }
}
function countDown() {
    console.log(dateArr)
    for (let i = 0; i < dateArr.length; i++) {
        let days = ''
        let hours = Math.abs(userData.hours - dateArr[i].hours);
        let minutes = userData.minutes - dateArr[i].minutes;
        let seconds = 59;

        if(dateArr[i].month > userData.month && dateArr[i] >= userData.date){
            days = parseInt(dateArr[i].date - userData.date);
            days += parseInt((dateArr[i].month - userData.month) * 30);

        }else if(dateArr[i].month < userData.month && dateArr[i].date <= userData.date){
            days = parseInt(userData.date - dateArr[i].date);
            days +=parseInt(( userData.month - dateArr[i].month) * 30);
        }else if(dateArr[i].month == userData.month && dateArr[i].date >= userData.date){
            days =parseInt( dateArr[i].date - userData.date);
        }else if(dateArr[i].month == userData.month && dateArr[i].date <= userData.date){
            days =  ((12- userData.month) * 30) + (30 - userData.date);

        }else{
            days = dateArr[i].date - userData.date
        }








       
        let tr = document.createElement("tr");
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
            tr.innerHTML = `  
            <td>${apiData[i]?.name}</td>
            <td>${apiData[i].date}</td>
            <td>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</td>`
       $("#table").append(tr)
        }, 1000);
    }
}
// submit action  btn
$("#submit-btn").click(function (e) {
    e.preventDefault();
    const userDate = $("#date").val();
    if (userDate) {
        $(this).prop("disabled", true);
        $(this).addClass("disable");
        displayData(userDate.split("-"));
        countDown();
        $(".start").click(startBirthdayCounter)
    } else {
        alert("Must be select a date and time !");
    }
});
// start calculation of birthday reminder application
// 25-7 || 29-2
function birthdayCounter() {
    // create date 
    const d = new Date();
    const cDate = d.getDate();
    const cMonth = d.getMonth() + 1;
    const cHours = d.getHours();
    const cMinutes = d.getMinutes();

    let days = 0;
    let hours = 24 - cHours;
    let minutes = 59 - cMinutes;
    let seconds = 59;
    // calculation month 
    if (userData.month > cMonth && userData.date > cDate) {
        days = ((userData.month - cMonth) * 30) - (30 - userData.date);
    } else if(userData.month == cMonth && userData.date > cDate){
        days = userData.date - cDate;
    }else if(userData.month > cMonth && userData.date <= cDate){
        days = ((userData.month - cMonth) * 30) + (30 - cDate);
    }else if (userData.month <= cMonth && userData.date <= cDate) {
        if (userData.month == cMonth) {
            days = 365 - (cDate - userData.date);
        } else if (userData.month < cMonth) {
            days = 365 - ((30 - userData.date) + parseInt((12 - userData.month) * 30))
        }
    }
    $(".pause").click(function(){
        clearInterval(stp);
    })
    var stp = setInterval(function () {
        if (seconds >= 1) {
            seconds = seconds - 1
        } else if (seconds == 0) {
            if (hours == 0 && minutes == 0) {
                seconds = 0;
                alert("Happy Birtday to You!")
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
        // display output in UI
        $(".days").text(`${days} days`);
        $(".hours").text(`${hours} hours`);
        $(".minutes").text(`${minutes} minutes`);
        $(".seconds").text(`${seconds} seconds`);
    }, 1)
}
// start birthday counter
function startBirthdayCounter() {
    // start counting
    birthdayCounter();
    // disable start button
    $(".start").prop("disabled", true);
    $(".start").addClass("disable");
    $(".pause").removeClass("disable");
    $(".pause").click(function(){
        $(".pause").addClass("disable");
    });
}
});