// making 3 type of chart using chart.js
// handle input change
// covid-19 statistics
const deaths = [];
const months = [];
let isdestroy = 0;
function handleCountryChange(){
    const  country = document.getElementById("country").value;
     fetch(`https://raw.githubusercontent.com/SohelTanbir/API-Data/master/covid19-deaths-${country.length? country:'bangladesh'}.json`)
    .then(response => response.json())
    .then(covidData => {
        console.log(covidData);
        for(let i =0; i<covidData.length; i++){
           if(!months.includes(covidData[i].month)){
            months.push(covidData[i].month);
           }
           deaths.push(covidData[i].deaths);
        }
        isdestroy +=1;
        LineChart(); 
    })
    .catch(err => {
        console.error(err);
    });
    
}

// destroy chart 

// get population data of a country
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
});

// line chart to show covid-19 statistics
const lineChart = document.getElementById("lineChart");

function LineChart(){
     const linechart =   new Chart("lineChart", {
        type: "line",
        data: {
            labels: months,
            datasets: [
                {
                fill:false,
                label:"Line Chart",
                backgroundColor: "skyblue",
                data:deaths,
                borderColor: 'blue',
                pointBorderWidth:5,
            }
        ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Covid-19 Statistics 2020 and 2021 of Bangladesh"
                },
            }
        }
    })
    if(isdestroy > 1){
        linechart.destroy();
    }
}


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