/*
--------------------------------------------------------------
----------- Simple Text Editor using JavaScrip -------------
------------------ date: 12-02-2022 ------------------------
---------------------------------------------------------------
*/

// text bold
document.getElementById("bold").addEventListener("click", ()=>{
    document.execCommand("bold", false);
});
// text italick
document.getElementById("italic").addEventListener("click", ()=>{
    document.execCommand("italic", false);
});
// text underline
document.getElementById("underline").addEventListener("click", ()=>{
    document.execCommand("underline", false);
});

document.getElementById("left").addEventListener("click", ()=>{
    document.execCommand("justifyLeft", false)
});
document.getElementById("center").addEventListener("click", ()=>{
    document.execCommand("justifyCenter", false)
});
document.getElementById("right").addEventListener("click", ()=>{
    document.execCommand("justifyRight", false)
});
document.getElementById("justify").addEventListener("click", ()=>{
    document.execCommand("justifyFull", false)
});
document.getElementById("line-height").addEventListener("click", ()=>{
    document.querySelector(".editor-area").classList.toggle("line-height");
});
document.getElementById("add-link").addEventListener("click", ()=>{
    alert('add link');
});