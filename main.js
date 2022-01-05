// Started learning jquery date: 04-01-2022


// styntex of ready document function
$(document).ready(function(){

//     // hide all p element on the web page
//     $("button").click(function(){
//        $("p").hide();
//     });
//    // Show all p element on the web page
//     $("#show").click(function(){
//        $("p").show();
//     });

    // $(".hide").click(function(){
    //     $("ul li:last-child").hide();
    // })

    // select all p element with class name into
    // $(".hide").click(function(){
    //     $("p.into").hide();
    // })
    // $(".hide").click(function(){
    //     $("a[target= '_blank']").hide();
    // })

    $("tr:odd").css("background-color","red")
    // select all input with type of button
    $(":button").css({"background-color": "blue", "color":"white"})
    // duble-click on buttion to hide table
    // $(".hide").dblclick(function(){
    //     $("table").hide();
    // })
    // $(".hide").mouseenter(function(){
    //   alert("mouseenter event fired")
    // })
    // $(".hide").mouseleave(function(){
    //   alert("mouseLeave event fired")
    // })
    // $("#mouse").mousedown(function(){
    //   alert("mousedown event fired")
    // })
    // $("#mouse").mouseup(function(){
    //   alert("mousedown event fired")
    // })
 
    // $("#mouse").on({
    //     click: function(){
    //         $(this).css("background-color", "blue")
    //     },
    //     mouseout:function(){
    //         $(this).css("background-color", "orange")
    //     }
    // })
// toggle method to hide and show an element
$(".hide").click(function(){
    $("table").toggle("slow");
})
// fade effect
// $("#effects").click(function(){
//     $(".div1").fadeOut()
// })
// $("#effects").click(function(){
//     $(".div2").fadeOut(1000)
// })
// $("#effects").click(function(){
//     $(".div2").fadeToggle(2000)
// })
// $("#effects").click(function(){
//     $(".div2").fadeTo(2000, .3)
// })

/// slide method
$(".slide1").click(function(){
    $(".panel1").slideUp(1000)
})
$(".slide2").click(function(){
    $(".panel2").slideDown(1000)
})
$(".slide3").click(function(){
    $(".panel3").slideToggle(1000)
})

// animation method
$("#move").click(function(){
    $(".div2").animate({
        left:'40%',
        height:'300px'
    }, 2000).animate({width:'400px',height:'100px'})
})
$("#stop").click(function(){
    $(".div2").stop()
})

// get  method jquery
$("#gets").click(function(){
    var txt = $("h3").text();
    alert('get tet = '+ txt)
})
// $("#gethtml").click(function(){
//    var html = $("#test").html();
//    alert(html)
// })
$("#gethtml").click(function(){
   var html = $("#test").val();
   alert(html)
})

$("#inValue").click(function(){
   var val = $("#inputs").val();
   alert(val)
})
$("#getattr").click(function(){
   var attr = $("#test").attr("title");
   alert(attr)
})
// set method jquery
$("#gets2").click(function(){
    var settxt = $("h3").text("text set by javascript");
    alert('set text in h3')
})
$("#gets2").click(function(){
    var settxt = $("h3").text("text set by javascript");
    alert('set text in h3')
})
$("#setinputeVal").click(function(){
   $("#inputs2").val("value set by javascript");
})
$("#setattr").click(function(){
   $("img").attr('src', 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80');
})

// append and prepend method
$(".btn1").click(function(){
    $("#apnd").append(" <b> appended text</b>")
})
$(".btn2").click(function(){
    $("#prepend").prepend(" <b> prepend text</b>")
})
$(".btn3").click(function(){
    $("#afbf").after(" <b> after text</b>")
})
$(".btn4").click(function(){
    $("#afbf").before(" <b> before text</b>")
})

$(".btn5").click(function(){
    $("p").remove(".remo");
})
$(".btn6").click(function(){
    $(".removes").empty();
})

$(".btn7").click(function(){
    $(".addclass").addClass("styles")
})

$(".btn8").click(function(){
    $(".addclass").removeClass("styles")
})
$(".btn9").click(function(){
    $(".addclass").toggleClass("styles")
})
$(".btn10").click(function(){
    $("#styles1").css({
        "background":"yellow",
        "color":"red",
        "padding":"10px"

    })
})

// check dimension
$(".btn11").click(function(){
    alert("width = " + $(".checkdimension").innerWidth() +" " + "height = " + $(".checkdimension").height())
})

// traverse jquery dom up and down 
// var parent =$(".chile").parent().css({"background-color": "red", "border": "2px solid yellow"})
// console.log(parent);
// $(".container").children("p.chile").css("color","blue")
$(".container p").siblings().css("color","skyblue")



// end line
})
