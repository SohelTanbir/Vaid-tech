// making a simple editor 

// add event to action user command
document.getElementById("bold").addEventListener("click", textBold);
document.getElementById("italic").addEventListener("click", textItalic);
document.getElementById("underline").addEventListener("click", textUnderline);
document.getElementById("left").addEventListener("click", textLeft);
document.getElementById("center").addEventListener("click", textCenter);
document.getElementById("right").addEventListener("click", textRight);
document.getElementById("justify").addEventListener("click", textJustify);

// get selected text content
function selectedText(){
    const text = window.getSelection();
    if(text){
       document.getElementById("editor-area").innerHTML = text;
    }
}
// if text content available in editable div then user can text formatting 
const isContent = document.querySelector(".editor-area").value;
if(isContent){
    document.querySelector(".editor-area").addEventListener("mouseup", selectedText);
}

// all action methods
function textBold(){
    document.querySelector(".editor-area").classList.toggle("text-bold");
}
function textItalic(){
    document.querySelector(".editor-area").classList.toggle("text-italic");
}
function textUnderline(){
    document.querySelector(".editor-area").classList.toggle("text-underline");
}
function textLeft(){
    document.querySelector(".editor-area").classList.add("text-left");
    document.querySelector(".editor-area")?.classList?.remove("text-center");
    document.querySelector(".editor-area")?.classList?.remove("text-right");
}
function textCenter(){
    document.querySelector(".editor-area").classList.add("text-center");
    document.querySelector(".editor-area").classList?.remove("text-left");
    document.querySelector(".editor-area").classList?.remove("text-right");
}
function textRight(){
    document.querySelector(".editor-area").classList.add("text-right");
    document.querySelector(".editor-area").classList?.remove("text-center");
    document.querySelector(".editor-area").classList?.remove("text-left");
}
function textJustify(){
    document.querySelector(".editor-area").classList.toggle("text-justify");
    document.querySelector(".editor-area").classList?.remove("text-center");
    document.querySelector(".editor-area").classList?.remove("text-left");
      document.querySelector(".editor-area")?.classList?.remove("text-right");
}