$(document).ready(function(){

 $(".item").click(function(){
     // show full width image 
   $("#fullWidth").css({visibility:"visible",transform:'scale(1)'});
   $("#fullWidth").animate({width:'80vw',height:'90vh'});

     $("#overlay-bg").css("visibility", "visible");
    //set image select image
       const url = this.children[0].src;
      $("#fullWidth").attr("src", url)
      });


    // hide full view image
$(".close").click(function(){
       // hide 
     $("#fullWidth").css("visibility", "hidden");
     $("#overlay-bg").css("visibility", "hidden");
     
     // remove width adn height
     $("#fullWidth").animate({width:'0',height:'0'})
});















// jquery endline
})