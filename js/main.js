$(document).ready(function(){
 
// step one -- required email 
$(".continue-btn").click(nextStep);
$(".back-btn").click(prevStep);

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




})