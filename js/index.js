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
    let publicId = ''
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const inputData = handleInput();
        if (inputData) {
            // hide no event msg 
            document.querySelector('.no-event-msg').style.display = "none";
            // call add event method to add new event
            addEvents({
                'id': id++,
                'title': `${inputData.title}`,
                'start': new Date(`${inputData.year}`, `${inputData.month}`, `${inputData.date}`)
            })
            // clear input field
            document.getElementById("title").value = '';
            document.getElementById("description").value = '';
            document.getElementById("date").value = '';
        }
    });
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        // include any option here by fullcalendar rules
        eventClick: function (eventId) {
            $("#update").modal('show');
            // select a specific event by id and show in the update modal
            const findEvent = calendar.getEventById(eventId.event._def.publicId);
            const eventTitle = findEvent._def.title;
            publicId = findEvent._def.publicId;
            const dateString = findEvent._instance.range.start;
            const date = dateString.toLocaleString().split(",");
            const udate = date[0].split("/");
            const stringDate = `${udate[2]}-${udate[0] < 10 ? '0' + udate[0] : udate[0]}-${udate[1] < 10 ? '0' + udate[1] : udate[1]}`;
            document.getElementById("utitle").value = eventTitle;
            document.getElementById("udescription").value = eventTitle;
            document.getElementById("updateDate").value = stringDate;


            // update event
            document.getElementById("updateBtn").addEventListener("click", function (e) {
                e.preventDefault();
                const Utitle = document.getElementById("utitle").value.trim();
                const description = document.getElementById("udescription").value;
                const UdateArr = document.getElementById("updateDate").value.split("-");
                const Uyear = UdateArr[0];
                const Umonth = UdateArr[1] - 1;
                const Udate = UdateArr[2];

                if (Utitle.length > 0 && UdateArr.length > 0) {
                    calendar.addEvent({
                        id: publicId,
                        title: Utitle,
                        start: new Date(`${Uyear}`, `${Umonth}`, `${Udate}`)
                    });

                    if (publicId) {
                        const delEvent = calendar.getEventById(publicId);
                        delEvent?.remove();
                    }
                    document.getElementById("utitle").value = '';
                    document.getElementById("udescription").value = '';
                    document.getElementById("updateDate").value = '';
                    $("#update").modal("hide");
                }
            });
        }
    });


// delete event
document.getElementById("delete").addEventListener("click", function (e) {
        e.preventDefault();
        if (publicId) {
            const delEvent = calendar.getEventById(publicId);
            delEvent?.remove();
            document.getElementById("utitle").value = '';
            document.getElementById("udescription").value = '';
            document.getElementById("updateDate").value = '';
            $("#update").modal("hide");
        }
});
// add new event 
function addEvents(event) {
        calendar.addEvent(event, true)
        calendar.render();
        alert("Event Added Successfully");
    }
});
