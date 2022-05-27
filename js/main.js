$(document).ready(function(){
    let clearTimeId;
    // dismiss toast
    $(".dismiss-icon").click(function(){
        $("#toast-container").css("left","100%");
        // stop setTimeout function
        if(clearTimeId){
            clearTimeout(clearTimeId);
        }
        
    });

    $("#login-btn").click(toastOpen)

// toast open
function toastOpen(){
    $("#toast-container").css("left","70%");
    clearTimeId =  setTimeout(toastHide,5000);

    // time progreebar 
    let time = 5;
    let width = 280;
    let perSecondWidth = 280/time
const interValId = setInterval(()=>{
    if(time >0){
        time = time -1;
        const percentWidth =( (perSecondWidth/width)*100)*time;
        console.log(percentWidth);
        $("#progrees").css({width:`${percentWidth}`})
    }else{
        clearInterval(interValId)
    }
 
}, 1000)
}


// toast hide
function toastHide(time){
    $("#toast-container").css("left","100%");
    // set default width of progressbar
    $("#progrees").css({width:'100%!important'})
}




})

