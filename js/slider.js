// Make a Slider using Vanila JavaScript, Date: 03-01-2022

// slect essential html element to handle the slider
const sliderItems = document.getElementsByClassName("slider-item");
const prevBtn = document.querySelector(".prev-icon");
const nextBtn = document.querySelector(".next-icon");

// hide all sides at intial time
function hideSlides() {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.display = 'none'
    }
}
hideSlides()
var activeSlide = 0;
showSlides(activeSlide);
// move to the next slide by click next buttion
function nextSlide() {
    sliderItems[0].style.display = 'block';
    nextBtn.addEventListener("click", function () {
        if(activeSlide == sliderItems.length -1){
            activeSlide = 0;
            showSlides(0);
            hideCurrentSlide(sliderItems.length - 1);
            console.log(sliderItems.length)
        }else{
            if (activeSlide < sliderItems.length-1) {
                activeSlide = activeSlide + 1;
                showSlides(activeSlide);
                hideCurrentSlide(activeSlide - 1);
            }
        }
    });
    // slide auto play
    if (activeSlide >= 0 && activeSlide < sliderItems.length-1){
        setInterval(function(){
            if(activeSlide == sliderItems.length -1){
                activeSlide = 0;
                showSlides(activeSlide);
                hideCurrentSlide(sliderItems.length - 1);
            }else{
                if (activeSlide < sliderItems.length-1) {
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
    prevBtn.addEventListener("click", function () {
        if (activeSlide > 0 && activeSlide < sliderItems.length-1) {
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
    sliderItems[index].style.display = 'none';
}
// show in slide at a time by index number
function showSlides(index) {
    sliderItems[index].style.display = 'block';
}
prevSlide();
nextSlide()