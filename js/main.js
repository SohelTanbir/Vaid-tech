// wait until load webpage
$(document).ready(function () {
  // select input field and add EventLister
  $("input[type='file']").change(uploader);
  // image uploader
  function uploader() {
    const files = this.files;
    if (files && files[0] && files[0].type == 'image/jpeg' || files[0].type == 'image/png') {
      $("#img").css("display", "block");
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
    $(".reload-btn").on("click", function () {
      window.location.reload();
    });
    // image area selection
    let sx = 0;
    let sy = 0;
    let sw = 0;
    let sh = 0;
    $("#img").on("mousedown", mouseDown);
    // handle mousedown event 
    function mouseDown(e) {
      sx = e.clientX - 18;
      sy = e.clientY - 110;
      // select to crop image show after mousedown event fired
      $("#selectArea").css("display", "block");
      $("#x2").innerHTML = `start x:${sx}`;
      $("#y2").innerHTML = ` start y:${sy}`;
      // set margin left and top
      $("#selectArea").css({ marginLeft: `${sx}` + "px",  marginTop: `${sy}` + "px" });
      console.log(sx, sy);
      document.getElementById("img").addEventListener("mousemove", handleMouseMove);
    }
    // handle mousemove event
    function handleMouseMove(e) {
      sw = e.clientX;
      sh = e.clientY;
      $("#x2").text(`x:${sx}`);
      $("#y2").text(`y:${sy}`);
      $("#selectArea").css({ width: `${sw}` + "px" });
      $("#selectArea").css({ height: `${sh}` + "px" });
      $("#xw").text(`w:${sw}`);
      $("#xy").text(` h:${sh}`);
      $("#x").text(`${sw}`);
      $("#y").text(`x${sh}`);
    }
    // remove eventListener
    function removeEvent() {
      document.getElementById("img").removeEventListener("mousemove", handleMouseMove);
    }
    $("#selectArea").mouseup(removeEvent);
    $("#img").mouseup(removeEvent);
    // crop or select a part of upload image
    $(".crop-btn").click(cropImage)
    // crop image 
    function cropImage() {
      const context = document.getElementById('canvas').getContext('2d');
      var img = new Image();
      img.onload = function () {
        const imgWidth = img.width;
        const imgHeight = img.height;
        const selectX = sw;
        const selectY = sh;
        const mLeft = sx;
        const mTop = sy;
        // create div element and append in upload-img
        const div = document.createElement("div");
        div.classList.add("segment");
        div.style.left = sx + 'px';
        div.style.top = sy + 'px';
        div.style.width = selectX + 'px';
        div.style.height = selectY + 'px';
        $(".upload-img").append(div)
        sx = Math.floor((sx / 644) * imgWidth);
        sy = Math.floor((sy / 350) * imgHeight);
        sw = Math.floor((sw / 644) * imgWidth);
        sh = Math.floor((sh / 350) * imgHeight);

        context.drawImage(img, sx, sy, sw, sh, mLeft, mTop, selectX, selectY);

        // handle drag and drop
      document.getElementById("canvas").addEventListener("dragstart",function(event) {
        event.dataTransfer.setData("imageData", event.target.id);
      });
      document.querySelector(".upload-img").addEventListener("dragover",function(event) {
        event.preventDefault();
        this.style.border = "5px dotted red";
      });
      document.querySelector(".upload-img").addEventListener("drop",function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("imageData");
        event.target.append(document.getElementById(data));
        // hide output img countainer when drop the image part
        $(".output-img").css({display:"none"});
        $("#canvas").css({marginLeft:-`${mLeft+1}`+'px', marginTop:-`${mTop+1}`+'px'})
      });
      }
      img.src = URL.createObjectURL(files[0]);
      
      
  

    }
 
  };
  // jquery ready endline 
});