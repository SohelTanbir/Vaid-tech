$(document).ready(function(){

    $(".item img").click(function(){
     // show full width image 
     $("#fullWidth").css("visibility", "visible");
     $("#overlay-bg").css("visibility", "visible");
    //set image select image
       const url = this.src;
       $("#fullWidth").attr("src", url)


    });


    // hide full view image
    $(".close").click(function(){
     $("#fullWidth").css("visibility", "hidden");
     $("#overlay-bg").css("visibility", "hidden");
     
    })















// jquery endline
})