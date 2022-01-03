// Make a Slider using Vanila JavaScript, Date: 03-01-2022
const sliderItems = document.getElementsByClassName("slider-item");
const prevBtn = document.querySelector(".prev-icon");
const nextBtn = document.querySelector(".next-icon");



function hideSlides() {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.display = 'none'
    }
}
hideSlides()
var activeSlide = 0;

showSlides(activeSlide);

// move to next slide by click next buttion
function nextSlide() {
    nextBtn.addEventListener("click", function () {
        if (activeSlide < sliderItems.length-1) {
            activeSlide = activeSlide + 1;
            showSlides(activeSlide);
            hideCurrentSlide(activeSlide - 1);
        } else {
           alert("Slide End");
        }
    });
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

function showSlides(index) {
    sliderItems[index].style.display = 'block';
}

prevSlide();
nextSlide()