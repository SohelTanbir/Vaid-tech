document.addEventListener('DOMContentLoaded', function () {
    const eventLengths = localStorage.length
    // show total events amount in the UI
    document.getElementById("total-event").innerHTML = `(${eventLengths > 10 ? '0' + eventLengths : eventLengths})`

    // hide no event message if found event in localStorage
    if (eventLengths) {
        document.querySelector(".no-event-msg").style.display = "none"
    }
    // handle get user input value
    const submitBtn = document.getElementById("subBtn");
    // handle input value
    function handleInput() {
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value;
        const dateArr = document.getElementById("date").value.split("-");
        const year = dateArr[0];
        const month = dateArr[1] - 1;
        const date = dateArr[2];
        if (title.length > 0 && dateArr.length > 2) {
            return { title, description, year, month, date }
        } else {
            alert("All Field is Required!")
        }
    }
    let id = 1;
    let publicId = ''
    submitBtn.addEventListener("click", function (e) {
        id *= eventLengths;
        console.log(id);
        e.preventDefault();
        const inputData = handleInput();
        if (inputData) {
            // call add event method to add new event
            storeEvent(id, {
                'id': id,
                'title': `${inputData.title}`,
                'start': new Date(`${inputData.year}`, `${inputData.month}`, `${inputData.date}`)
            });

            // clear input field
            document.getElementById("title").value = '';
            document.getElementById("description").value = '';
            document.getElementById("date").value = '';
        }
    });
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        // include any option here by fullcalendar rules
        droppable: true,
        editable: true,
        eventDrop: function (eventInfo) {
            const event = eventInfo.event;
            const dateString = event._instance.range.start;
            const date = dateString.toLocaleString().split(",");
            const udate = date[0].split("/");
            const stringDate = `${udate[2]}-${udate[0] < 10 ? '0' + udate[0] : udate[0]}-${udate[1] < 10 ? '0' + udate[1] : udate[1]}`;
            console.log(stringDate);
            const updateEvent = {
                id: event._def.publicId,
                title: event._def.title,
                start: new Date(stringDate)
            }
            storeEvent(event._def.publicId, updateEvent)
        },
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
                    // if you want to add event in calendar app without localStorage you must uncomment addEvent method
                    // calendar.addEvent({
                    //     id: publicId,
                    //     title: Utitle,
                    //     start: new Date(`${Uyear}`, `${Umonth}`, `${Udate}`)
                    // });
                    storeEvent(publicId, {
                        id: publicId,
                        title: Utitle,
                        start: new Date(`${Uyear}`, `${Umonth}`, `${Udate}`)
                    })
                    // if you want to remove event in  calendar app without localStorage you must uncomment if condition
                    // if (publicId) {
                    //     const delEvent = calendar.getEventById(publicId);
                    //     delEvent?.remove();
                    // }
                    document.getElementById("utitle").value = '';
                    document.getElementById("udescription").value = '';
                    document.getElementById("updateDate").value = '';
                    $("#update").modal("hide");
                }
            });
        }
    });
    // event show in UI from localStorage
    for (var key in localStorage) {
        if (typeof localStorage[key] == 'string') {
            addEvents(JSON.parse(localStorage[key]))
        }
    }
    // delete event
    document.getElementById("delete").addEventListener("click", function (e) {
        e.preventDefault();
        if (publicId) {
            // const delEvent = calendar.getEventById(publicId);
            // delEvent?.remove();
            localStorage.removeItem(publicId);
            document.getElementById("utitle").value = '';
            document.getElementById("udescription").value = '';
            document.getElementById("updateDate").value = '';
            $("#update").modal("hide");
            window.location.reload();
        }
    });
    // add new event 
    function addEvents(event) {
        calendar.addEvent(event, true)
        calendar.render();
    }
    // show file picker to open file from user device
    document.getElementById("importEvent").addEventListener("click", function () {
        // call openFile method to open file picker ans open a file
        openFile()
    })
    // show saveFilePicker to save or export task data from localStorage
    document.getElementById("exportEvent").addEventListener("click", function () {
        if (eventLengths) {
            saveFile(JSON.stringify(localStorage));
        } else {
            alert("Sorry! there is no event found!")
        }
    })
    // delete all event from localStorage
    document.getElementById("clearAllEvent").addEventListener("click", function () {
        if (eventLengths) {
            const isclear = window.confirm("Do you want to delete All Events ?");
            if (isclear) {
                localStorage.clear();
                window.location.reload();
            }
        } else {
            alert("Sorry! There is no event to Delete!")
        }
    });
    // update or store event in localStorage
    function storeEvent(id, event) {
        const eventJson = JSON.stringify(event)
        if (id >= 0 && event) {
            localStorage.setItem(id, eventJson);
            alert("Success");
            window.location.reload()
        } else {
            alert("Event add Failed!")
        }
    }
    // save or export data when user click export button
    async function saveFile(textContent) {
        if (typeof textContent === 'string') {
            const pickerOptns = {
                types: [{
                    description: "Text File",
                    accept: { "text/plain": ['.txt'] }
                }],
                suggestedName: "myText"
            };
            // show file picker
            const fileHandle = await window.showSaveFilePicker(pickerOptns)
            const writable = await fileHandle.createWritable();
            await writable.write(textContent);
            await writable.close();
        }
    };
    // import or open  json file from user device
    async function openFile() {
        const pickerOptns = {
            types: [{
                description: "Text File",
                accept: { "text/plain": ['.txt'] }
            }],
        };
        const [fileHandle] = await window.showOpenFilePicker(pickerOptns);
        const file = await fileHandle.getFile()
        const contents = await file.text();
        if (file.type === 'text/plain') {
            importEvent(contents)
        }
    }
    // import task or event into localStorage
    function importEvent(events) {
        const eventObjects = JSON.parse(events);
        for (const id in eventObjects) {
            ;
            localStorage.setItem(id, eventObjects[id]);
            window.location.reload();
        }
        alert("imported Success");
    }
});


