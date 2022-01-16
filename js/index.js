// get user input value
const submitBtn = document.getElementById("subBtn");
const calenderElement = document.getElementById("calender");


// handle input value
function handleInput() {
    const title = document.getElementById("title").value.trim();

    const description = document.getElementById("description").value;
    const dateArr = document.getElementById("date").value.split("-");
    const year = dateArr[0];
    const month = dateArr[1] - 1;
    const date = dateArr[2];
    if (title.length > 0 && dateArr.length > 2 && description.length > 0) {
        return { title, description, year, month, date }
    } else {
        alert("All Field is Required!")
    }
}
const events = [];
let settings = {};
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const event = handleInput();
    events.push({
        'Date': new Date(`${event.year}`, `${event.month}`, `${event.date}`),
        'Title': `${event.title}`,
    })


    if (event) {
        caleandar(calenderElement, events, settings);
        console.log(events);
        document.querySelector(".no-event-msg").style.display = "none";
        alert("Event Added Successfully");
        // clear input field
        // document.getElementById("title").value = '';
        // document.getElementById("description").value = '';
        // document.getElementById("date").value = '';

        // delete event 
        const eventElement = document.querySelectorAll(".cld-days li p.eventday span");

       for(let i = 0; i<eventElement.length; i++){
           eventElement[i].addEventListener("click", function(){
               eventElement[i].style.display = "none";
               events.pop(i);
               eventElement[i].parentElement.classList.remove("eventday")
             alert("Event Deleted Succefully!")
           })
       }
    } 
});

