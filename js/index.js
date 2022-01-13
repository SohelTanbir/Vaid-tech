// get user input value
const submitBtn = document.getElementById("subBtn");
const calenderElement = document.getElementById("calender");


// handle input value
function handleInput(){
    const title = document.getElementById("title").value.trim();

    const description = document.getElementById("description").value;
    const dateArr = document.getElementById("date").value.split("-");
    const year = dateArr[0];
    const month = dateArr[1] -1;
    const date = dateArr[2];
    if(title.length > 0 && dateArr.length > 0 && description.length > 0){
        return {title, description, year, month, date}
    }else{
        alert("All Field is Required!")
    }
}


submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
   const event =  handleInput();
   const events = [
    {
        'Date': new Date(`${event.year}`, `${event.month}`, `${event.date}`),
        'Title': `${event.title}`,
    },
   ]

   if(event){
    caleandar(calenderElement, events, settings);
    document.querySelector(".no-event-msg").style.display = "none";
   }

})



// call calender method 

// custome events
const events = [
    {
        'Date': new Date(2022, 0, 5),
        'Title': 'Happy Birthday',
    },
    {
        'Date': new Date(2022, 0, 10),
        'Title': 'Exam will be start',
    },
    {
        'Date': new Date(2022, 0, 15),
        'Title': 'Travel with airplane',
    },
]
const settings = {};

// call the calender method to work with calender 
