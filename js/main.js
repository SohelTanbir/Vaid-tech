$(document).ready(function(){
 
// all sectors are here
const allSteps = $(".step-items ul li");
const allActions = $(".step-actions form").children();
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
    // active step indecator function 
    addAciveClass(currentStep)
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
    };
}
// handle submit form or last step
function handleSubmit(e){
    e.preventDefault();
    alert('Congratulations! You have completed all steps');
}
// add active step indecator class on current step
function addAciveClass(currentStep){
    const currentClass = currentStep.classList[0];
       for (let i = 0; i < allActions.length; i++) {
         if(allActions[i].classList.contains(currentClass)){
             const activeStep = allSteps[i].children;
             changeStepStatus(activeStep)
             const index = i+1;
             console.log(allSteps[index].classList.add("active-step"));
            break;
         }
         console.log(i);
       }
}
// change active step status
function changeStepStatus(activeStep){
    activeStep[0].classList.toggle("hide");
    activeStep[1].classList.toggle("show");
}

})