// making 3 type of chart using chart.js

// bar chart to show student subject marks
const barChart = document.getElementById("barChart");
const semester = ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "5th Semester", "6th Semester", "7th Semester", "8th Semester"];
const marks = [45, 65, 77, 60, 90, 30, 89, 40]
new Chart("barChart", {
    type: "bar",
    data: {
        labels: semester,
        datasets: [{
            label: 'Bar chart',
            data: marks,
            backgroundColor: ["orange", "blue", "red", "skyblue", "tomato", "green", "pink", "salmon"],
            index: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Student Subject Marks in 2022"
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});
// line chart to show covid-19 statistics
const lineChart = document.getElementById("lineChart");
const months = ["January", "February", "March", "April", "may", "june", "july", "August", "September", "October", "November", "December"]
new Chart("lineChart", {
    type: "line",
    data: {
        labels: months,
        datasets: [{
            fill:false,
            label:"Line Chart",
            backgroundColor: "blue",
            data:[10,60,30,40, 10, 78, 34, 20]
            
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Covid-19 Statistics in 2021"
            }
        }
    }
})













// // covid-19 statistics
// fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=japan", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
// 		"x-rapidapi-key": "9e9a2ab0b7mshda76194c3c2e7efp13fbfejsn02ab59377104"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });