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

    // toast main function
    function Toast(configObject){
            // initialization and decleration
            let duration = configObject?.duration || 3;
            const minusPercent = 100/duration;
            const miliSecond =  duration*1000;
            const toastContainer = $(".toast-container");
            let toastWidth = toastContainer[0].clientWidth;
            let clearTimeId;
            if(clearTimeId){
                clearTimeout(clearTimeId);
            }
// all selector here 
    $(".dismiss-icon").click(dismissToast);
    $("#login-btn").click(toastOpen);

    // identify alert message type and style toast according to the class
   function toastStyle(toastInfo){
    if(toastInfo){
        const toastType =toastInfo.response.toLowerCase();
        const message = toastInfo.message || "Toast Notification"
        if( toastType== 'info'){
            $("#message").text(message);
            toastContainer.addClass(toastType);
            $(".info_icon").css("display","block");

        }else if(toastType == 'warning'){
            $("#message").text(message);
            toastContainer.addClass(toastType);
            $(".warning_icon").css("display","block");

        }else if(toastType == 'error'){
            $("#message").text(message);
            toastContainer.addClass(toastType);
            $(".error_icon").css("display","block")
        }else if(toastType == 'success'){
            $("#message").text(message);
            toastContainer.addClass("success");
            $(".success_icon").css("display","block")
        }
    }else{
        $("#message").text(message);
        toastContainer.addClass("success");
        $(".success_icon").css("display","block")
    }
   }

    // all controller function here
    function dismissToast(){
        toastContainer.css("left","100%");
    }
    // toast open
    function toastOpen(){
            toastContainer.css("left","70%");
            toastContainer[0].style.webkitAnimationPlayState="running";
            // call toast progress function
            toastProgress();
            // stop the setTimeout function
            clearTimeId =  setTimeout(toastHide,miliSecond);
            toastStyle(configObject);
        }
        // calculation toast progress animation duration
        function toastProgress(){
            // time progreebar 
            let time = duration;
            let perSecondWidth = toastWidth/time
            setInterval(()=>{
            if(time >0){
                time = time -1;
                const percentWidth =((perSecondWidth/toastWidth)*100)*time-minusPercent;
                $(".progrees").css({width:`${percentWidth+"%"}`})
            }
        }, 1000)
        }
        // toast hide
        function toastHide(){
            toastContainer.css("left","100%");
            // // set default width of progressbar
            $(".progrees").css({width:"100%"});
            toastContainer[0].style.webkitAnimationPlayState="paused";
        }
    }
        // call the main toast function to initialize the toast app
        Toast({
            duration:5,
            response:"success",
            message:"Account Created Successfully!"
        });
    })
    
    