// wait until load webpage
window.addEventListener("load", function () {

  // select input field and add EventLister
  document.querySelector("input[type='file']").addEventListener("change", uploader);

  // image uploader
  function uploader() {
    if (this.files && this.files[0] && this.files[0].type =='image/jpeg' || this.files[0].type =='image/png') {

      document.getElementById("img").style.display = "block"
      const img = document.getElementById("img");
      img.onload = ()=>{
        URL.revokeObjectURL(img.src); 
      }
      img.src = URL.createObjectURL(this.files[0]);
    
      // hide input field after upload image
      this.style.display ='none'
    }else{
      alert("Sorry! only image allow")
    }

// Relaod window 
document.querySelector(".reload").addEventListener("click", function(){
  window.location.reload();
})



  };
















});
