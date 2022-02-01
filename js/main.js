// wait until load webpage
window.addEventListener("load", function () {

  // select input field and add EventLister
  document.querySelector("input[type='file']").addEventListener("change", uploader);

  // image uploader
  function uploader() {
    const files = this.files;
    if (files && files[0] && files[0].type == 'image/jpeg' || files[0].type == 'image/png') {

      document.getElementById("img").style.display = "block";
      const img = document.getElementById("img");
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      }
      img.src = URL.createObjectURL(files[0]);

      // hide input field after upload image
      this.style.display = 'none'
    } else {
      alert("Sorry! invalid file!")
    }

    // Relaod window 
    document.querySelector(".reload").addEventListener("click", function () {
      window.location.reload();
    });

// image area selection
let x = 0;
let y = 0;
document.getElementById("img").addEventListener("click", (e)=>{
      x = e.clientX;
      y = e.clientY;
      console.log(x, y);
      document.getElementById("x").innerHTML = `width = ${x}`;
      document.getElementById("y").innerHTML = `height = ${y}`;

})



    // crop or select a part of upload image
    document.querySelector(".crop").addEventListener("click", function () {
      cropImage();
    });
    // crop image 
    function cropImage() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      var image = new Image();
      image.src =URL.createObjectURL(files[0]);
      image.onload = function(){
        context.drawImage(image,x, y, x, y, 0, 0, x, y);
      }
  }



    // endline if condition
  };
















});
