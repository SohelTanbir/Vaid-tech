// making a simple editor 

document.getElementById("bold").addEventListener("click", textBold);
document.getElementById("italic").addEventListener("click", textItalic);
document.getElementById("underline").addEventListener("click", textUnderline);
document.getElementById("left").addEventListener("click", textLeft);
document.getElementById("center").addEventListener("click", textCenter);
document.getElementById("right").addEventListener("click", textRight);
document.getElementById("justify").addEventListener("click", textJustify);


function selectedText(){
    const text = window.getSelection();
    if(text){
       document.getElementById("demo").innerHTML = text;
    }
}
document.querySelector(".editor-area").addEventListener("mouseup", selectedText);
function textBold(){
    document.getElementById("demo").classList.toggle("text-bold");
}
function textItalic(){
    document.getElementById("demo").classList.toggle("text-italic");
}
function textUnderline(){
    document.getElementById("demo").classList.toggle("text-underline");
}
function textLeft(){
    document.getElementById("demo").classList.add("text-left");
}
function textCenter(){
    document.getElementById("demo").classList.add("text-center");
}
function textRight(){
    document.getElementById("demo").classList.add("text-right");
}
function textJustify(){
    document.getElementById("demo").classList.toggle("text-justify");
}