$(document).ready(function(){

    // NAV BAR HELPER***************************************
    $('#hello').hide();
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
      // *****************************************************

    // CAROUSELS AND SILDERS ***************************************************

    // Build better habbits slider should go first mobile
    $('.slider.testimonial_slider').slider({indicators:true, height:150 });
    $('.slider.press_slider').slider({indicators:false, height:200});

    // CAROUSEL ON FOR PRESS RELEASES ON PRESS PAGE**************
    slider = $('.bxslider').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 400,
      pagerCustom: '#bx-pager'
    });
    // PRESS ARROWS ***********************
    // $('#press_release_arrow_right').hide();
    $( '#press_release_arrow_left' ).click(function() {
      slider.goToNextSlide();
      // $('#press_release_arrow_right').show();
    });
    $( '#press_release_arrow_right' ).click(function() {
      slider.goToPrevSlide();
    });
    // *************************************************************

    // *************************************************************************




    // CAROUSEL FOR QUOTES
    // $('.carousel.carousel-slider#quote_slider').carousel({full_width: true});
    // CAROUSEL FOR BUILD BETTER HABBITS
    // $('.carousel.carousel-slider#build_better_habbits_carousel').carousel({});
    // **************************
      // $('.carousel').carousel({});

    // ALL SLIDERS ***********************
    // $('.slider').slider({full_width: true, indicators: false, height: 200 });
    // ***************************************


    // SIMPLE MATERIALIZE TRIGGERS
    $('ul.tabs').tabs();

    $('.modal-trigger').leanModal();

    $('.scrollspy').scrollSpy();

    // for form select
    $('select').material_select();
    // ###############################




    // MEET JOE VIDEO
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
    // ######################################



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

    // SUCCESFULL FORM FILLED OUT
    $('#sucess_message').hide();
    if (window.location.hash == '#sucess') {
      $('#modal1').openModal();
      window.location.hash = ""
    };
    // ******************************************

    $( '#turquoise_try_our_products_container' ).mouseover(function(event) {
        $( '#name' ).focus();
        $( this ).off( event );
      });


    // CUSTOM FORM METHODS
    $('#question2').hide();
    $('#question3').hide();
    $('#message').hide();

    $("#question1 input").keypress(function (event) {
       if (event.which == 13) {
           event.preventDefault();
          //  if else
           $('#question1').hide();
           $('#question2').show();
       }
    });
    $("#question2 input").keypress(function (event) {
       if (event.which == 13) {
         event.preventDefault();
           $('#question2').hide();
           $('#question3').show();
       }
    });
    $("#question3 select").keypress(function (event) {
       if (event.which == 13) {
          event.preventDefault();
           $('#question3').hide();
           $('#message').show();
          event.stopPropagation();
       }
    });
    $("#message input, textarea").keypress(function (event) {
       if (event.which == 13) {
         $('form').unbind('submit').submit();
           $('#question3').hide();
           $('#message').hide();
       }
    });
    // *******************************************************
});

// THINGS TO EVENTUALLY DELETE#############################
// QUOTES AND PRESS SLIDERS ***
// $( "#quote_slider_left_chev" ).click(function() {
//   $('#quote_slider').slider('prev');
// });
// $( "#quote_slider_right_chev" ).click(function() {
//   $('#quote_slider').slider('next');
// });
// $( "#press_slider_left_chev" ).click(function() {
//   $('#press_slider').slider('prev');
// });
// $( "#press_slider_right_chev" ).click(function() {
//   $('#press_slider').slider('next');
// });
// ****************


// $(".button-collapse").sideNav();
// $('.materialboxed').materialbox();
// ********************************************************
