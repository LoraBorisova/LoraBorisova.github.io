$( ".item-desc" ).hide()

$( ".img-item" ).hover(function() {
      $( this ).find(".item-desc")
        .toggleClass( "active" )
          .stop( true, true )
          .slideToggle(600,"swing");
});