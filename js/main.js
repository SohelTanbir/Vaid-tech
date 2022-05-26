$(document).ready(function(){
    let clearTimeId;
    // dismiss toast
    $(".dismiss-icon").click(function(){
        $("#toast-container").css("left","100%");
        // stop setTimeout function
        if(clearTimeId){
            clearTimeout(clearTimeId)
        }
        
    });

    $("#login-btn").click(toastOpen)

// toast open
function toastOpen(){
    $("#toast-container").css("left","70%");
    clearTimeId =  setTimeout(toastHide,5000);
}


// toast hide
function toastHide(time){
    $("#toast-container").css("left","100%")
}


})

