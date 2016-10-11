$(document).ready(function(){
    $('#hello').hide();
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('ul.tabs').tabs();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({full_width: true, indicators: false, height: 200 });
    $( "#quote_slider_left_chev" ).click(function() {
      $('#quote_slider').slider('prev');
    });
    $( "#quote_slider_right_chev" ).click(function() {
      $('#quote_slider').slider('next');
    });
      {
        $('#help_button').hover( function() {
          $('#help_dropdown').fadeIn( "fast" );
        });
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
