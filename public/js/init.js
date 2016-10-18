$(document).ready(function(){
    $('#hello').hide();
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('ul.tabs').tabs();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();

    // ALL SLIDERS ***********************
    $('.slider').slider({full_width: true, indicators: false, height: 200 });
    // ***************************************

    // QUOTES AND PRESS SLIDERS *********************
    $( "#quote_slider_left_chev" ).click(function() {
      $('#quote_slider').slider('prev');
    });
    $( "#quote_slider_right_chev" ).click(function() {
      $('#quote_slider').slider('next');
    });
    $( "#press_slider_left_chev" ).click(function() {
      $('#press_slider').slider('prev');
    });
    $( "#press_slider_right_chev" ).click(function() {
      $('#press_slider').slider('next');
    });
    // ***************************************************

    // NAV BAR HELPER***************************************
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
      // ******************************************

      $('#sucess_message').hide();
      if (window.location.hash == '#sucess') {
        $('#modal1').openModal();
        window.location.hash = ""
      };


      var iframe = document.querySelector('#joe_video');
      var player = new Vimeo.Player(iframe);
      $('body').click(function(evt){
        if(!$(evt.target).is('#play_button_link')) {
            player.pause();
         }
      });
      $( '#play_button_link' ).click(function(event) {
        event.stopPropagation();
        player.play();
      });

     $('select').material_select();

// SAFARI FORM ERROR MESSAGES****************************
     $("form").submit(function(e) {

        var ref = $(this).find("[required]");

        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Required field should not be blank.");

                $(this).focus();

                e.preventDefault();
                return false;
            }
        });  return true;
    });
    // *************************************************
});
