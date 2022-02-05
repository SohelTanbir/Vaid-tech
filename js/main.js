// wait until load webpage
window.addEventListener("load", function () {

  // select input field and add EventLister
  document.querySelector("input[type='file']").addEventListener("change", uploader);

  // image uploader
  function uploader() {
    const files = this.files;
    if (files && files[0] && files[0].type == 'image/jpeg' || files[0].type == 'image/png') {
      console.log(files);
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
    document.querySelector(".reload-btn").addEventListener("click", function () {
      window.location.reload();
    });

    // image area selection
    let sx = 0;
    let sy = 0;
    let sw = 0;
    let sh = 0;
    const selectArea = document.getElementById("selectArea");
    document.getElementById("img").addEventListener("mousedown", mouseDown);

// handle mousedown event 
function mouseDown(e){
  sx = e.clientX;
  sy = e.clientY

// select to crop image show after mousedown event fired
  selectArea.style.display = 'block';

  document.getElementById("x2").innerHTML =`start x:${sx}`;
  document.getElementById("y2").innerHTML = ` start y:${sy}`;
  // set margin left and top
  selectArea.style.marginLeft = `${sx}`+"px";
  selectArea.style.marginTop = `${sy}`+"px";
  document.getElementById("img").addEventListener("mousemove", handleMouseMove);
}
// handle mousemove event
function handleMouseMove(e){

  sw = e.clientX;
  sh = e.clientY;
  document.getElementById("x").innerHTML =`${sw}x `;
  document.getElementById("y").innerHTML = ` ${sh}`;
  selectArea.style.width = `${sw}` + "px";
  selectArea.style.height = `${sh}` + "px";
  document.getElementById("xw").innerHTML =`w:${sw}`;
  document.getElementById("xy").innerHTML = ` h:${sh}`;

}
// remove eventListener
function removeEvent(){
  document.getElementById("img").removeEventListener("mousemove", handleMouseMove);
  // document.getElementById("img").removeEventListener("mousedown", mouseDown);
}

  document.getElementById("selectArea").addEventListener("mouseup", removeEvent);
  document.getElementById("img").addEventListener("mouseup", removeEvent);

    // crop or select a part of upload image
    document.querySelector(".crop-btn").addEventListener("click", function () {
      cropImage();
    });
    // crop image 
    function cropImage() {
      const context = document.getElementById('canvas').getContext('2d');
      var img = new Image();

      img.src = URL.createObjectURL(files[0]);
      img.onload = function () {
      const imgWidth = img.width;
      const imgHeight = img.height;

        
      const selectX = sw;
      const selectY = sh;
      const div = document.createElement("div");
      const uploadImg = document.querySelector(".upload-img");
      div.classList.add("segment");
      div.style.left =sx+'px';
      div.style.top =sy+'px';
      div.style.width = selectX+'px';
      div.style.height = selectY+'px'
      uploadImg.appendChild(div)



      sx =Math.floor( (sx/644)*imgWidth);
      sy = Math.floor((sy/350)*imgHeight);
 
      sw =Math.floor( (sw/644)*imgWidth);
      sh = Math.floor((sh/350)*imgHeight);



        context.drawImage(img, sx, sy,sw,sh, 0, 0, selectX, selectY);

      }
    }

    // endline if condition
  };

  


});

