$("document").ready(function(){
    // Make a Slider using JQuery, Date: 09-01-2022

// hide all sides at intial time
function hideSlides() {
    for (let i = 0; i < $(".slider-item").length; i++) {
        $(".slider-item")[i].style.display = 'none'
    }
}
hideSlides()
var activeSlide = 0;
showSlides(activeSlide);
// move to the next slide by click next buttion
function nextSlide() {
    $(".slider-item")[0].style.display = 'block';
    $(".next-icon").click( function () {
        if(activeSlide == $(".slider-item").length -1){
            activeSlide = 0;
            showSlides(0);
            hideCurrentSlide($(".slider-item").length - 1);
        }else{
            if (activeSlide < $(".slider-item").length-1) {
                activeSlide = activeSlide + 1;
                showSlides(activeSlide);
                hideCurrentSlide(activeSlide - 1);
            }
        }
    });
    // slide auto play
    if (activeSlide >= 0 && activeSlide < $(".slider-item").length-1){
        setInterval(function(){
            if(activeSlide == $(".slider-item").length -1){
                activeSlide = 0;
                showSlides(activeSlide);
                hideCurrentSlide($(".slider-item").length - 1);
            }else{
                if (activeSlide < $(".slider-item").length-1) {
                    activeSlide = activeSlide + 1;
                    showSlides(activeSlide);
                    hideCurrentSlide(activeSlide - 1);
                }
            }
        }, 3000)
    }
}
// move previous slide
function prevSlide() {
    $(".prev-icon").click(function () {
        if (activeSlide > 0 && activeSlide < $(".slider-item").length-1) {
            activeSlide = activeSlide -1;
            showSlides(activeSlide);
            hideCurrentSlide(activeSlide +1);
        } else {
           alert("no more previous slide");
        }
    });
}
// hide current slide on click next button
function hideCurrentSlide(index = 0) {
    $(".slider-item")[index].style.display = 'none';
}
// show in slide at a time by index number
function showSlides(index) {
    $(".slider-item")[index].style.display = 'block';
}
prevSlide();
nextSlide()

});