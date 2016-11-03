$(document).ready(function(){

  // load more press release
  $('#loadMoreButton').click(function() {
      $('.current').removeClass('current').hide()
          .next().addClass('current');
      $('.bottom').removeClass('bottom')
          .show().next().addClass('bottom');
      if ($('.current').hasClass('last')) {
          $('#loadMoreButton').attr('disabled', true);
      }
  });
  // ****************************************

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

    // CAROUSEL FOR QUOTES
    // $('.carousel.carousel-slider#quote_slider').carousel({full_width: true});
    // CAROUSEL FOR BUILD BETTER HABBITS
    // $('.carousel.carousel-slider#build_better_habbits_carousel').carousel({});
    // **************************
      $('.carousel.press_release_mobile').carousel({});

    // ALL SLIDERS ***********************
    // $('.slider').slider({full_width: true, indicators: false, height: 200 });
    // ***************************************

    // *************************************************************************


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

    // $( '#turquoise_try_our_products_container' ).mouseover(function(event) {
    //     $( '#name' ).focus();
    //     $( this ).off( event );
    //   });


    // CUSTOM FORM METHODS
    $('#question2').hide();
    $('#question3').hide();
    $('#question4').hide();
    $('#message').hide();
    $('#backButtonContainer').hide();
    $('#progess_counter').hide();
    $('#email_error').hide();
    $( "#thank_you_message" ).hide();


    $("#choice_send_message").click(function (event) {
      $('#question1').hide();
      $('#message').show();
    });

    $("#choice_clincal_study").click(function (event) {
      $('#question1').animate({left: '150px'}, 'fast').fadeOut(300);
      $('#question2').delay(800).fadeIn(300);
      $('#progess_counter').delay(800).fadeIn(300);
      $('#backButtonContainer').delay(800).fadeIn(300);
      $("#backButton").attr('id', 'backButton1');
      setTimeout(function () {
        $('#name').focus();
        $('#question1').css({'left':'0'})
      }, 1000);
      $("#backButton1").click(function (event) {
        event.stopPropagation();
        $("#backButton1").attr('id', 'backButton');
        $('#question2').fadeOut(400);
        $('#question1').fadeIn(400);
        $('#backButtonContainer').hide();
        $('#progess_counter').hide();
      });
    });

    $("#question2 input").keypress(function (event) {
       if (event.which == 13) {
         event.preventDefault();
          $('#question2').animate({height: 'toggle'}, 'slow').fadeOut(300);
           $('#question3').delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
           $("#backButton1").attr('id', 'backButton2');
           setTimeout(function () {
             $('#email').focus();
             $('#question2').css({'left':'0'})
           }, 1000);
           $('#progess_counter').text('2/4');
           $("#backButton2").click(function (event) {
             event.stopPropagation();
             $("#backButton2").attr('id', 'backButton1');
             $("#question1").hide();
             $('#question3').animate({height: 'toggle'}, 'slow').fadeOut(300);
              $('#question2').delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
             $('#progress_div').show();
             $('#backButtonContainer').show();
             $('#progess_counter').show();
             setTimeout(function () {
               $('#name').focus();
             }, 1000);
             $('#progess_counter').text('1/4');
           });
       }
    });

    $("#question3 input").keypress(function (event) {
       if (event.which == 13) {
         event.preventDefault();
        //  email validation
        var $email = $("#email").val();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if ($email == '' || !re.test($email)) {
          $("#email_error").fadeIn('slow').delay(5000).fadeOut('slow')
          $("#email").removeClass('validate').addClass('invalid').delay(5000).removeClass('inalid').addClass('validate');
          return false
        }
        else {
          $('#question3').animate({height: 'toggle'}, 'slow').fadeOut(300);
          $('#question4').delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
          $("#backButton2").attr('class', 'whiteButton backButton3');
          $("#backButton2").attr('id', 'backButton3');
          $('#progess_counter').text('3/4');
          $(".whiteButton.backButton3#backButton").click(function (event) {
            event.stopPropagation();
            alert('shouldnt freakout')
          });
        }

       }
    });
    $("#question4 select").keypress(function (event) {
       if (event.which == 13) {
          event.preventDefault();
           $('#question4').hide();
           $('#message').show();
           $('#progess_counter').text('4/4');
          event.stopPropagation();
       }
    });
    $("#message input, textarea").keypress(function (event) {
       if (event.which == 13) {
         $( "#thank_you_message" ).show().delay( 20000000 ).fadeOut( 4000000 );
         $('form').delay( 25000000 ).unbind('submit').submit();
           $('#question3').hide();
           $('#progess_counter').hide();
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
