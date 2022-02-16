$(document).ready(function () {




  $(".item").click(function () {
    // show full width image 
    $("#fullWidth").css({ visibility: "visible" });
    $("#fullWidth").animate({ width: '80vw', height: '90vh' });
    setTimeout(()=>{
      $("#fullWidth").css({
         transform: 'scale(1)',
         transform:'rotateY(180deg)',
        })
    },1000)

    // show overlay of whole window
    $("#overlay-bg").css("visibility", "visible");

    //set image select image
    const url = this.children[0].src;
    $("#fullWidth").attr("src", url);
  });


  // hide full view image and overlay
  $(".close").click(function () {
    $("#fullWidth").css("visibility", "hidden");
    $("#overlay-bg").css("visibility", "hidden");

    //  remove width adn height
    $("#fullWidth").animate({ width: '0', height: '0' })
  });

  //controll  slide previous and next 
  const items = ($(".item"));
  let i = 0;
  let prev = items.length;
  $(".prev").click(() => {
    prev--;
    if (prev >= 0) {
      const url = items[prev].children[0].src;
      $("#fullWidth").attr("src", url).fadeIn(1000).css({ transform: 'scale(.5)'});
      setTimeout(()=>{
        $("#fullWidth").css({
           transform: 'scale(1)',
           transform:'rotateY(180deg)',
          })
      },1000)
      if(prev == 0){
        prev = items.length;
      }
    }
  });
  $(".next").click(() => {
    i++;
    if (i <items.length) {
      const url = items[i].children[0].src;
      $("#fullWidth").attr("src", url).css({ transform: 'scale(.5)'});
      setTimeout(()=>{
        $("#fullWidth").css({
           transform: 'scale(1)',
           transform:'rotateY(180deg)',
          })
      },1000)
  
    } else {
      i = 0;
    }

  })












  // jquery endline
})