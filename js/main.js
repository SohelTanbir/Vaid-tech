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
    let sx = 0;
    let sy = 0;
    let sw = 0;
    let sh = 0;
    const selectArea = document.getElementById("selectArea");
    document.getElementById("img").addEventListener("mousedown", (e) => {
      sx = e.clientX;
      sy = e.clientY;
      selectArea.style.visibility = 'visible';
      // set margin left and top
      selectArea.style.marginLeft = `${sx - 20}` + "px";
      selectArea.style.marginTop = `${sy - 45}` + "px";
      document.getElementById("img").addEventListener("mousemove", handleMouseMove);
    });
// handle mousemove event
function handleMouseMove(e){
  sw = e.clientX;
  sh = e.clientY;
  document.getElementById("x").innerHTML = `${sw}x`;
  document.getElementById("y").innerHTML = `${sh}`;
  selectArea.style.width = `${sw}` + "px";
  selectArea.style.height = `${sh}` + "px";
}
// remove eventListener
function removeEvent(){
  document.getElementById("img").removeEventListener("mousemove", handleMouseMove)
}

  document.getElementById("img").addEventListener("mouseup", (e) => {
    removeEvent();
      // set width and height
      selectArea.style.width = `${sw}` + "px";
      selectArea.style.height = `${sh}` + "px";
    });

    // crop or select a part of upload image
    document.querySelector(".crop").addEventListener("click", function () {
      cropImage();
    });
    // crop image 
    function cropImage() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      var image = new Image();
      image.src = URL.createObjectURL(files[0]);
      image.onload = function () {
        context.drawImage(image, sx, sy, sw, sh, 0, 0, 200, 200);
      }
    }

    // endline if condition
  };



});
