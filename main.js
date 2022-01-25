// practice chart js  with demo data

// syntext of chart 
// const myChart = new Chart("myChart", {
//     type:'any chart type like bar, pie, line etc',
//    data:{},
//     options:{}
// })

// create a scatter chart
const scatterChart = document.getElementById("scatterChart");
const scatterData = [
    {x:1, y:10},
    {x:2, y:15},
    {x:3, y:30},
    {x:4, y:32},
    {x:8, y:50},
    {x:6, y:65},
    {x:7, y:80},
    {x:8, y:90},
    {x:9, y:100},
];
new Chart("scatterChart", {
    type: "scatter",
    data:{
        datasets:[{
            pointRadius: 8,
            pointBackgroundColor:"blue",
            data: scatterData
        }]

    },
    options: {
        legend: {display: false},
        scales: {
          xAxes: [{ticks: {min: 1, max:10}}],
          yAxes: [{ticks: {min: 10, max:100}}],
        }
      },
})