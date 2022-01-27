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
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(response => response.json())
    .then(populationObj => {
        for(let i = 0; i<populationObj.data.length; i++){
            if(!years.includes(populationObj.data[i].Year)){
                years.push(populationObj.data[i].Year);
                populations.push(populationObj.data[i].Population);
                nation = populationObj.data[i].Nation
            }
         }
      barChartPopulation( populationObj.data[0].Nation)
    })

// bar chart to show student subject marks
const barChart = document.getElementById("barChart");

// population statistics of a country 
function barChartPopulation(country){
    new Chart("barChart", {
        type: "bar",
        data: {
            labels: years.reverse(),
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
const doughnutChart = document.getElementById("doughnutChart");
const district = ["Thakurgaon", "Panchagar", "Dinajpur", "Ranpur", "Nilphamary", "Gaibandha"];
const area = [30, 50, 90, 40, 60]
new Chart("doughnutChart", {
    type:"doughnut",
    data:{
        labels:district,
        datasets:[{
            data:area,
            backgroundColor: ["orange", "blue", "red", "skyblue", "tomato", "green", "pink", "salmon"],
        }]
    },
    options:{
        plugins:{
            display:false,
            title:{
                display:true,
                text:"District area of Bangladesh"
            }
        }
    }
})