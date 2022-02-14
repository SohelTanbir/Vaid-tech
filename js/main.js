// making a simple editor 

// add event to action user command
const editoreArea = document.querySelector(".editor-area");
// document.getElementById("italic").addEventListener("click", textItalic);
document.getElementById("underline").addEventListener("click", textUnderline);
document.getElementById("left").addEventListener("click", textLeft);
document.getElementById("center").addEventListener("click", textCenter);
document.getElementById("right").addEventListener("click", textRight);
document.getElementById("justify").addEventListener("click", textJustify);
document.getElementById("line-height").addEventListener("click", lineHeight);
document.getElementById("add-link").addEventListener("click", addLink);

// get selected text content
function selectedText(){
    const text = window.getSelection();
    if(text){
       const span = document.createElement("span");
        span.innerText = text;
        editoreArea.appendChild(span);
    }
}

editoreArea.addEventListener("mouseup", selectedText);
// all action methods
function textBold(){
    document.querySelector(".editor-area").classList.toggle("text-bold"); 
}
function textItalic(){
    
    editoreArea.classList.toggle("text-italic");
}
function textUnderline(){
    editoreArea.classList.toggle("text-underline");
}
function textLeft(){
    editoreArea.classList.add("text-left");
    editoreArea?.classList?.remove("text-center");
    editoreArea?.classList?.remove("text-right");
}
function textCenter(){
    editoreArea.classList.add("text-center");
    editoreArea.classList?.remove("text-left");
    editoreArea.classList?.remove("text-right");
}
function textRight(){
    editoreArea.classList.add("text-right");
    editoreArea.classList?.remove("text-center");
    editoreArea.classList?.remove("text-left");
}
function textJustify(){
    editoreArea.classList.toggle("text-justify");
    editoreArea.classList?.remove("text-center");
    editoreArea.classList?.remove("text-left");
      editoreArea?.classList?.remove("text-right");
}
function lineHeight(){
    document.querySelector(".editor-area p").classList.toggle("line-height");
}
function addLink(){
    alert('add link');
}