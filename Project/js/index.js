document.addEventListener('DOMContentLoaded', function () {

    // handle get user input value
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
    let id = 1;
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const inputData = handleInput();
        if(inputData){
            // hide no event msg 
            document.querySelector('.no-event-msg').style.display = "none";
            // call add event method to add new event
            addEvents({
                'id': id++,
                'title': `${inputData.title}`,
                'start': new Date(`${inputData.year}`, `${inputData.month}`, `${inputData.date}`)
            })
            // clear input field
            // document.getElementById("title").value = '';
            // document.getElementById("description").value = '';
            // document.getElementById("date").value = '';
        }
    });
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl,{
        // include any option here by fullcalendar rules
        eventClick:function(eventId){
        const isDeltete = window.confirm("Do you want to Delete Event?");
        if(isDeltete){
            deleteEvent(eventId.event._def.publicId)
        }else{
            const update = window.confirm("Do you want to Update Event?");
            if(update){
                alert("Event Updated Successfully")
            }
        }
        }
    });

// add new event 
    function addEvents(event) {
        calendar.addEvent(event, true)
        calendar.render();
        alert("Event Added Successfully");
    }
    // remove event 
    function deleteEvent(id) {
        const evnt = calendar.getEventById(id);
        evnt.remove();
    }
});


{/* <div class="actions">
  <button id="edit">Edit</button>
  <button id="delete">Delete</button>
</div> */}
