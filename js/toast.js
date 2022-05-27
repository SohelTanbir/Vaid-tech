/*
---------------------------------------------------------------
------------- Welcome to Toast Notification App ----------
---------------------------------------------------------------
 App Name: Toast Notification App
 Version:1.0
 Author: Sohel Rana
 Start Date: 26-05-2022
 End Date:----
*/

$(document).ready(function(){
   
    function Toast(configObject){
        // initialization and decleration
        let duration = configObject.duration;
        const message = configObject.message;
        const toastContainer = $("#toast-container");
        let toastWidth = toastContainer[0].clientWidth;
        let clearTimeId;

// all selector here 
    // dismiss toast btn
    $(".dismiss-icon").click(dismissToast);
    // login btn
    $("#login-btn").click(toastOpen)

// all controller function here
function dismissToast(){
    toastContainer.css("left","100%");
    // stop setTimeout function
    if(clearTimeId){
        clearTimeout(clearTimeId);
    }
}
// toast open
function toastOpen(){
    toastContainer.css("left","70%");
        clearTimeId =  setTimeout(toastHide,5000);
        // time progreebar 
        let perSecondWidth = toastWidth/duration
    const interValId = setInterval(()=>{
        if(duration >0){
            duration = duration -1;
            $("#endTime").text(duration)
            const percentWidth =( (perSecondWidth/toastWidth)*100)*duration-20;
            console.log(percentWidth+"%");
    
            $("#progrees").css({width:`${percentWidth+"%"}`})
        }
     
    }, 1000)
    }
    
    // toast hide
    function toastHide(time){
        toastContainer.css("left","100%");
        // set default width of progressbar
        $("#progrees").css({width:'100%!important'})
    }
    
    
            
    }
    // call the main toast function to initialize the toast app
    Toast({duration:5, message:'success'});
})

