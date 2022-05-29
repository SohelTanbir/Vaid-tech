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
    // remove active class
    removeAciveClass()
}
// handle submit form or last step
function handleSubmit(e){
    e.preventDefault();
    if(allActions.length){
        const lastActionItem =allActions[allActions.length-1];
        const lastStepItem = allSteps[allSteps.length-1];
        // hide the last submit section when user submit form data
        lastActionItem.classList.toggle("show");
        // show success message to user when user account created succesfull
        $(".success-message").addClass("show");

        //change last step status when submit the form
        lastStepItem.children[0].classList.toggle("hide");
        lastStepItem.children[1].classList.toggle("show");
    }
   
}
// add active step indecator class on current step
function addAciveClass(currentStep){
    const currentClass = currentStep.classList[0];
       for (let i = 0; i < allActions.length; i++) {
         if(allActions[i].classList.contains(currentClass)){
             const activeStep = allSteps[i].children;
             changeStepStatus(activeStep)
             const index = i+1;
            allSteps[index].classList.add("active-step");
            break;
         }
       }
}
// add active step indecator class when user click back btn
function removeAciveClass(){
    let index;
       for (let i = 0; i < allSteps.length; i++) {
         if(allSteps[i].classList.contains("active-step")){
              index = i;
         }
       }
       if(index > 0){
          if(allSteps[index].children[1].classList.contains("show")){
              // set default text
            allSteps[index].children[0].classList.remove("hide");
            // remove show class to hide checkmark icon
            allSteps[index].children[1].classList.remove("show");
          }
        allSteps[index].classList.remove("active-step");
    }
}
// change active step status
function changeStepStatus(activeStep){
    activeStep[0].classList.toggle("hide");
    activeStep[1].classList.toggle("show");
}

})