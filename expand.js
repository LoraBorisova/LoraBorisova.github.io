$( ".description" ).hide()

var index, classShow, classHide;

$.fn.myCustomFunction = function(index) {
  $(this).find(".description")
  .eq(index)
    .toggleClass( "active" )
      .stop( true, true )
      .slideToggle(500,"swing");
};  

$( ".fa-solid" ).on( "click", function() {
  
  index = $( ".fa-solid" ).index(this);
  $(".item").myCustomFunction(index); 


 ($(this).hasClass('fa-plus')) ? $(this).addClass('fa-minus').removeClass('fa-plus') : $(this).addClass('fa-plus').removeClass('fa-minus');

});