$(document).ready(function(){




 $(".item").click(function(){
     // show full width image 
   $("#fullWidth").css({visibility:"visible"});
   $("#fullWidth").animate({width:'80vw',height:'90vh'}).fadeIn();

   // show overlay of whole window
     $("#overlay-bg").css("visibility", "visible");

    //set image select image
       const url = this.children[0].src;
      $("#fullWidth").attr("src", url);
      });


    // hide full view image and overlay
$(".close").click(function(){
     $("#fullWidth").css("visibility", "hidden");
     $("#overlay-bg").css("visibility", "hidden");
     
     // remove width adn height
    //  $("#fullWidth").animate({width:'0',height:'0'})
});















// jquery endline
})