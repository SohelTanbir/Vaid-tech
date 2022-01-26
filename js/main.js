// making 3 type of chart using chart.js
// covid-19 statistics
const countries = [];
const deaths = [];
const covidStatistic = [];
fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "9e9a2ab0b7mshda76194c3c2e7efp13fbfejsn02ab59377104"
	}
})
.then(response => response.json())
.then(covidData => {
    for(let i = 10; i<50; i++){
       if(!countries.includes(covidData.data.covid19Stats[i].country)){
        countries.push(covidData.data.covid19Stats[i].country);
        deaths.push(covidData.data.covid19Stats[i].deaths);
       }
    }
    ShowLineChart();
})
.catch(err => {
	console.error(err);
});








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


function ShowLineChart(){
        new Chart("lineChart", {
        type: "line",
        data: {
            labels: countries,
            datasets: [{
                fill:false,
                label:"Line Chart",
                backgroundColor: "skyblue",
                data:deaths,
                borderColor: 'blue',
                pointBorderWidth:8,
                tension: .2
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Covid-19 Statistics in the world"
                },
                tooltip:{
                    afterFooter:["sohel"]
                }
            }
        }
    })
    
}









