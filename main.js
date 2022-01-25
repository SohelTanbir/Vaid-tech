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

// line graph
const lineGraph = document.getElementById("lineGraph");
const x = [10,20,30,40,50,60,70,80,90,100,110,120,130,140]
const y = [1,2,3,6,5,6,10,8,10,5,11,16,13,14,15,16]
new Chart("lineGraph", {
    type:"line",
    data:{
        labels:x,
        datasets:[{
            fill:false,
            lineTensio:0,
            backgroundColor:"blue",
            borderColor:"green",
            data:y
        }]
    },
    options:{
        legend:{display: false},
        scales:{
            yAxes:[{ ticks: {min:1, max: 20}}]
        }
    }
})


// Multiple Lines graph 
const multiLineGraph = document.getElementById("multiLineGraph");
const xvalue = [100,200,300,400,500,600,700,800,900,1000]
new Chart("multiLineGraph", {
    type:"line",
    data:{
        labels:xvalue,
        datasets:[
            {
                fill:false,
                data:[100,200,300,400,500,600,700,800,900,100],
                borderColor:"blue"
            },
            {
                fill:false,
                data:[100, 200, 100, 400, 900, 200,600,700],
                borderColor:"green"
            },
            {
                fill:false,
                data:[100, 400, 300, 400, 100,600,700,200],
                borderColor:"red"
            },
            {
                fill:false,
                data:[400, 100, 300, 600, 500,600,700,800],
                borderColor:"skyblue"
            },
        ]
    },
    options:{
        legend:{display:false}
    }
})