$(document).ready(function(){
    $('#hello').hide();
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({full_width: true, indicators: false, height: 200 });
    $( "#quote_slider_left_chev" ).click(function() {
      $('#quote_slider').slider('prev');
    });
    $( "#quote_slider_right_chev" ).click(function() {
      $('#quote_slider').slider('next');
    });
    // if (top.location.pathname === '/help' )
      {
        $('#help_button').hover( function() {
          $('#help_dropdown').fadeIn( "fast" );
        });
        // $('#help_button').mouseout( function() {
        //   $('#hello').fadeOut( "fast" );
        // });
      };
      $('#hello').hover( function() {
        $('#help_dropdown').show();
      });
      $('#help').hover( function() {
        $('#help_dropdown').fadeOut();
      });
      $('#health_care').hover( function() {
        $('#help_dropdown').fadeOut();
      });
});
