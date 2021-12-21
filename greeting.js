// say greeting depend on time
function greeting(name) {
    const greeting = document.querySelector(".greeting")
    const hours = new Date().getHours()
    if (hours <= 12 && hours >= 5) {
        greeting.innerHTML=`Good Morning - ${name}`;
    } else if (hours > 12 && hours <=16) {
        greeting.innerHTML=`Good Afternoon - ${name}`;
    } else if (hours => 17 && hours <=21) {
        greeting.innerHTML=`Good Evening - ${name}`;
    } else {
        greeting.innerHTML=`Hey ${name}, You Should go to Sleep!`
    }
}
greeting("Sohel")
