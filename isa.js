/* global $*/
$(document).ready(function() {
    $("#targetJumbotron").hover(function(){
        $(this).css("background-image", "url('/assests/portfolio_header_animated.gif')");
        }, function(){
        $(this).css("background-image", "url(/assests/portfolio_header_still.png')");
    });
    $("#mycellium_info").hover(function(){
        $(this).css("background-image", "url('/assests/mycellium_animated.gif')");
        }, function(){
        $(this).css("background-image", "url('/assests/mycellium_still.png')");
    });

    $("#wtr_info").hover(function(){
        $(this).css("background-image", "url('/assests/wtr_animated.gif')");
        }, function(){
        $(this).css("background-image", "url('/assests/wtr_still.png')");
    });
    $("#wearable_info").hover(function(){
        $(this).css("background-image", "url('/assests/wearable_animated.gif')");
        }, function(){
        $(this).css("background-image", "url('/assests/wearable_still.png')");
    });
    $("#textile_info").hover(function(){
        $(this).css("background-image", "url('/assests/textilePresentation_animated.gif')");
        }, function(){
        $(this).css("background-image", "url('/assests/textilePresentation_still.png')");
    });


});
    
    /*
    $.get("navbar.html", function(data){
        $("#bar").replaceWith(data);
    });
    
      $(".one").hover(function(){
        $(this).css("background-image", "url('mycellium_animated.gif')");
        }, function(){
        $(this).css("background-image", "url('mycellium_still.png')");
    });
    
     
    
    function areTheseValuesStrings(hoveredObject, gifimage, stillimage) {
        var stringValue = "";
         var confimredString = (typeof stringValue);
          var isItAString = (typeof issaString);
          if(confimredString === isItAString && confimredString === hoveredObject && confimredString === isItAString){
          alert("a string");
          }
          else {
          alert("can't run");
          }
      }




    function hoverAnimation(targetedArea, setAnimation, setStill) {
         
        
        
        
        $(targetedArea).hover(function(){
            $(this).css("background-image", setAnimation);
                console.log("animating");
            }, function(){
                $(this).css("background-image", setStill);
            console.log("not animating");
         });
    }
   
    
    
    hoverAnimation(".jumbrotron", "url('portfolio_header_animated.gif')", "url('portfolio_header_still.png')");
    
    */


