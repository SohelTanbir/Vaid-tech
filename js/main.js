$(document).ready(function(){
 
// all sectors are here
const allSteps = $(".step-items ul li");
$(".continue-btn").click(nextStep);
$(".back-btn").click(prevStep);
$("#submit-btn").click(handleSubmit);


// handle next steps
function nextStep(){
    const currentStep = this.parentNode.parentNode;
    const nextStep = this.parentNode.parentNode.nextElementSibling;
    currentStep.classList.add("hide");
    nextStep.classList.add("show");
    if(currentStep.classList.contains("show")){
        currentStep.classList.remove("show")
    }
}

// handle previous or back steps
function prevStep(){
    const currentStep = this.parentNode.parentNode;
    const prevStep = this.parentNode.parentNode.previousElementSibling;
    prevStep.classList.add("show");
    currentStep.classList.add("hide");

    if(currentStep.classList.contains("show")){
        currentStep.classList.remove("show")
    }
    if(prevStep.classList.contains("hide")){
        prevStep.classList.remove("hide")
    }
    console.log("cureent ",  currentStep);
    console.log("prv", prevStep);
}
// handle submit form or last step
function handleSubmit(e){
    e.preventDefault();
    alert('Congratulations! You have completed all steps');
}



})