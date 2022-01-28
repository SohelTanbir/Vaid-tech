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

    for(let i = 10; i<60; i++){
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

// get population data of USA
const years = [];
const populations = [];
fetch("https://raw.githubusercontent.com/SohelTanbir/API-Data/master/population-statistics.json")
    .then(response => response.json())
    .then(populationObj => {
        for(let i = 0; i<populationObj.length; i++){
            if(!years.includes(populationObj[i].year)){
                years.push(populationObj[i].year);
                populations.push(populationObj[i].population);
            }
         }
      barChartPopulation( populationObj[0].country)
    })

const divisions = [];
const coordinates = [];
fetch("https://raw.githubusercontent.com/SohelTanbir/API-Data/master/division.json")
.then(res => res.json())
.then(divisionData => {
    for(let i = 0; i<divisionData.length; i++){
        if(!divisions.includes(divisionData[i].division)){
            divisions.push(divisionData[i].division);
            coordinates.push(parseInt(divisionData[i].size));
        }
     }
     divisionOfBD()
})



// bar chart to show student subject marks
const barChart = document.getElementById("barChart");

// population statistics of a country 
function barChartPopulation(country){
    new Chart("barChart", {
        type: "bar",
        data: {
            labels: years,
            datasets: [{
                label: 'Bar chart',
                data: populations,
                backgroundColor: ["orange", "blue", "red", "skyblue", "tomato", "green", "pink", "salmon"],
                index: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: `Population Statistics of ${country}`
                },
                tooltip:{
                    callbacks: {
                        beforeLabel: function(context) {
                            if (context.parsed.y !== null) {
                                beforeLabel = "Total population";
                            }
                            return beforeLabel;
                        }
                    }
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
}
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
                    footer:['sohel', "rana"]
                }
            }
        }
    })
    
}


// doughnut chart 
function divisionOfBD(){
    new Chart("doughnutChart", {
        type:"doughnut",
        data:{
            labels:divisions,
            datasets:[{
                data:coordinates,
                backgroundColor: ["orange", "blue", "red", "skyblue", "tomato", "green", "pink", "salmon"],
            }]
        },
        options:{
            plugins:{
                display:false,
                title:{
                    display:true,
                    text:"divisions size of Bangladesh"
                }
            }
        }
    })
}