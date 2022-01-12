// get user input value
const submitBtn = document.getElementById("subBtn")
submitBtn.addEventListener("click", function(){
    alert("data submited")
})



// call calender method 
const calenderElement = document.getElementById("calender");
// custome events
const events = [
    {
        'Date': new Date(2022, 0, 5),
        'Title':'Happy Birthday',
    },
    {
        'Date': new Date(2022, 0, 10),
        'Title':'Exam will be start',
    },
    {
        'Date': new Date(2022, 0, 15),
        'Title':'Travel with airplane',
    },
]
const settings = {};

// call the calender method to work with calender 
caleandar(calenderElement, events, settings);