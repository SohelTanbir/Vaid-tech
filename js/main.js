// making 3 type of chart using chart.js
// handle input change
// covid-19 statistics
let deaths20 = [];
let deaths21 = [];
const months = [];
const country = [];
function handleCountryChange() {
   let country = document.getElementById("country").value;
    fetch(`https://raw.githubusercontent.com/SohelTanbir/API-Data/master/covid19-deaths-${country}.json`)
        .then(response => response.json())
        .then(covidData => {
            for (let i = 0; i < covidData.length; i++) {
                if (!months.includes(covidData[i].month)) {
                    months.push(covidData[i].month);
                }
                // indentify year
               const years = covidData[i].year.split("-");
                let year2020 ='';
                let year2021 ='';
             if(years[1] == '2020'){
                year2020 = years[1] ;
                deaths20.push(covidData[i].deaths);
             }else{
                year2021 = years[1] ;
                deaths21.push(covidData[i].deaths);
             }

             
            }
            document.getElementById("lineChart").remove();
            document.querySelector(".select-country").innerHTML =`
            <canvas id="lineChart" style="width: 100%; max-width: 1000px; height: 400px;"></canvas>
            `;
           LineChart(covidData[0].country);
            deaths20 = [];
            deaths21 = [];
        })
        .catch(err => {
            console.error(err);
        });
}
LineChart()
// get population data of a country
const years = [];
const populations = [];
fetch("https://raw.githubusercontent.com/SohelTanbir/API-Data/master/population-statistics.json")
    .then(response => response.json())
    .then(populationObj => {
        for (let i = 0; i < populationObj.length; i++) {
            if (!years.includes(populationObj[i].year)) {
                years.push(populationObj[i].year);
                populations.push(populationObj[i].population);
            }
        }
        barChartPopulation(populationObj[0].country)
    })

const divisions = [];
const coordinates = [];
fetch("https://raw.githubusercontent.com/SohelTanbir/API-Data/master/division.json")
    .then(res => res.json())
    .then(divisionData => {
        for (let i = 0; i < divisionData.length; i++) {
            if (!divisions.includes(divisionData[i].division)) {
                divisions.push(divisionData[i].division);
                coordinates.push(parseInt(divisionData[i].size));
            }
        }
        divisionOfBD()
    });

// line chart to show covid-19 statistics
const lineChart = document.getElementById("lineChart");
function LineChart(country) {
    const linechart = new Chart("lineChart", {
        type: "line",
        data: {
            labels: months,
            datasets: [
                {
                    fill: false,
                    label: "Line Chart",
                    backgroundColor: "skyblue",
                    data: deaths20,
                    borderColor: 'blue',
                    pointBorderWidth: 5,
                },
                {
                    fill: false,
                    label: "Line Chart",
                    backgroundColor: "skyblue",
                    data: deaths21,
                    borderColor: 'skyblue',
                    pointBorderWidth: 5,
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: `Covid-19 Statistics 2020 and 2021 of ${country}`
                },
            }
        }
    })
    return linechart;
}


// bar chart to show student subject marks
const barChart = document.getElementById("barChart");

// population statistics of a country 
function barChartPopulation(country) {
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
                tooltip: {
                    callbacks: {
                        beforeLabel: function (context) {
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
function divisionOfBD() {
    new Chart("doughnutChart", {
        type: "doughnut",
        data: {
            labels: divisions,
            datasets: [{
                data: coordinates,
                backgroundColor: ["orange", "blue", "red", "skyblue", "tomato", "green", "pink", "salmon"],
            }]
        },
        options: {
            plugins: {
                display: false,
                title: {
                    display: true,
                    text: "divisions size of Bangladesh"
                }
            }
        }
    })
}