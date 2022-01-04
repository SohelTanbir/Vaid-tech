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










})

//  shorten styntex of ready document function
$(function(){

    // jquery code will be here

})