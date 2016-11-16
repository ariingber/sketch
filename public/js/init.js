$(document).ready(function(){
  // Nav bar to the side on mobile
  $(".button-collapse").sideNav();


// Quote Hover jQuery
  $('.hiddenQuote').hide();
  $('.pressIcon').hover(function(event) {
    event.stopPropagation()
    $('.shownQuote').toggleClass('shownQuote hiddenQuote');
    switch ($(this).attr('id')) {
      case 'wiredIcon':
        $('#wiredQuote').toggleClass('hiddenQuote shownQuote').show();
        break;
      case 'fastCompanyIcon':
        $('#fastCompanyQuote').toggleClass('hiddenQuote shownQuote').show();
        break;
      case 'crainsIcon':
        $('#crainsQuote').toggleClass('hiddenQuote shownQuote').show();
        break;
      case 'forbesIcon':
        $('#forbesQuote').toggleClass('hiddenQuote shownQuote').show();
        break;
      case 'wallStreetIcon':
        $('#wallStreetQuote').toggleClass('hiddenQuote shownQuote').show();
        break;
      case 'techCrunchIcon':
        $('#techCrunchQuote').toggleClass('hiddenQuote shownQuote').show();
        break;
    }
    $('.hiddenQuote').hide();
  });


  // load more press release
  $('#loadMoreButton').click(function() {
      $('.current').removeClass('current').fadeOut('slow')
          .next().addClass('current');
      $('.bottom').removeClass('bottom')
          .fadeIn('slow').next().addClass('bottom');
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
    $('.carousel.carousel-slider#build_better_habbits_carousel').carousel({full_width: true});

    // Build better habbits slider should go first mobile
    $('.slider.testimonial_slider').slider({indicators:true, height:150 });
    $('.slider.press_slider').slider({indicators:false, height:200});

    // CAROUSEL ON FOR PRESS RELEASES ON PRESS PAGE**************
    slider = $('.bxslider').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 400,
      infiniteLoop: false,
      pagerCustom: '#bx-pager'
    });
    // PRESS ARROWS ***********************
    $('#press_release_arrow_left').hide();
    var pressReleaseClicker = 0;
    $( '#press_release_arrow_left' ).click(function() {
      slider.goToPrevSlide();
      pressReleaseClicker -= 1
      switch (pressReleaseClicker){
        case 1:
          $('#press_release_arrow_right').show();
          break;
        case 0:
          $('#press_release_arrow_left').hide();
          break;
      }
    });
    $( '#press_release_arrow_right' ).click(function() {
      slider.goToNextSlide();
      pressReleaseClicker += 1
      switch (pressReleaseClicker){
        case 1:
          $('#press_release_arrow_left').show();
          break;
        case 2:
          $('#press_release_arrow_right').hide();
          break;
      }
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

    // $('techCrunchQuote').hide()
    // $('#drivenQuote').hide();
    // $('#sxQuote').hide();
    // $('#disruptiveQuote').hide();



// SAFARI FORM ERROR MESSAGES****************************
    //  $("form").submit(function(e) {
    //
    //     var ref = $(this).find("[required]");
    //
    //     $(ref).each(function(){
    //         if ( $(this).val() == '' )
    //         {
    //             alert("Required field should not be blank.");
    //
    //             $(this).focus();
    //
    //             e.preventDefault();
    //             return false;
    //         }
    //     });  return true;
    // });
    // *************************************************

    // SUCCESFULL FORM FILLED OUT
    $('#sucess_message').hide();
    if (window.location.hash == '#sucess') {
      $('#modal1').openModal();
      window.location.hash = ""
    };
    // ******************************************


    // CUSTOM FORM METHODS
    $('#question2').hide();
    $('#question3').hide();
    $('#question4').hide();
    $('#question5').hide();
    $('#question6').hide();
    $('#question7').hide();
    $('#question8').hide();
    $('#message_div').hide();
    $('#sorry_message_div').hide();
    $('#additional_comments_div').hide();
    $('#progress_counter').hide();
    $('#email_error').hide();
    $('#first_name_error').hide();
    $('#last_name_error').hide();
    $( "#thank_you_message" ).hide();


    $("#choice_send_message").click(function (event) {
      $('#question1').animate({left: '150px'}, 'fast').fadeOut(300);
      $('#message_div').delay(800).fadeIn(300);
      setTimeout(function () {
        $('#message').focus();
        $('#question1').css({'left':'0'})
      }, 1000);
    });

    $("#choice_try_products").click(function (event) {
      $('#question1').animate({left: '150px'}, 'fast').fadeOut(300);
      $('#question2').delay(800).fadeIn(300);
      setTimeout(function () {
        $('#question1').css({'left':'0'})
      }, 1000);
    });
    $("#choice_try_products2").click(function (event) {
      $('#sorry_message_div').animate({left: '150px'}, 'fast').fadeOut(300);
      $('#question2').delay(800).fadeIn(300);
      setTimeout(function () {
        $('#sorry_message_div').css({'left':'0'})
      }, 1000);
    });

    $("#wont_try_clinical_study").click(function (event) {
      $('#question2').animate({left: '150px'}, 'fast').fadeOut(300);
      $('#sorry_message_div').delay(800).fadeIn(300);
      setTimeout(function () {
        $('#question2').css({'left':'0'})
      }, 1000);
    });

    $("#try_clinical_study").click(function (event) {
      $('#question2').animate({left: '150px'}, 'fast').fadeOut(300);
      $('#question3').delay(800).fadeIn(300);
      setTimeout(function () {
        $('#first_name').focus();
        $('#question2').css({'left':'0'})
      }, 1000);
      $('#progress_counter').delay(800).fadeIn(300);
    });

    var count = 1;

    function fire (currentInput) {
      count += 1;
      currentInput.animate({height: 'toggle'}, 'slow').fadeOut(300);
      currentInput.next().delay(700).animate({height: 'toggle'}, 'slow').fadeIn(500);
      setTimeout(function () {
        currentInput.next().find('input').focus()
      }, 1000);
       $('#count').text(count + '');
    }

    function formEnterFunction(currentInput) {
      switch (currentInput.find('input')[0].id){
        case 'first_name':
          if ($("#first_name").val() == '') {
            $('#first_name_error').fadeIn().delay(900).fadeOut();
          }
          else {
            fire(currentInput)
          }
          break;
        case 'last_name':
          if ($("#last_name").val() == '') {
            $('#last_name_error').fadeIn().delay(900).fadeOut();
          }
          else {
            fire(currentInput)
          }
          break;
        case 'email':
          var $email = $("#email").val();
          var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
          if ($email == '' || !re.test($email)) {
            $('#email_error').fadeIn().delay(900).fadeOut();
          }
          else {
            fire(currentInput)
          }
          break;
        default :
          fire(currentInput);
      }
    }

    $('.nextButton').click(function(){
      var currentInput = $(this).parent().parent();
      formEnterFunction(currentInput);
    });


    $("#question3 input").keypress(function (event) {
      var currentInput = $(this).parent().parent();
       if (event.which == 13) {
         event.preventDefault();
         formEnterFunction(currentInput);
         event.stopPropagation();
       }
    });

    $("#question4 input").keypress(function (event) {
      var currentInput = $(this).parent().parent();
       if (event.which == 13) {
        event.preventDefault();
         formEnterFunction(currentInput);
       }
    });

    $("#question5 input").keypress(function (event) {
      var currentInput = $(this).parent().parent();
       if (event.which == 13) {
         event.preventDefault();
         formEnterFunction(currentInput);
        }
      });

    $("#question6 input").keypress(function (event) {
      var currentInput = $(this).parent().parent();
       if (event.which == 13) {
         event.preventDefault();
         formEnterFunction(currentInput);
        }
    });

    $("#asthma, #copd, #wont_disclose").click(function () {
      $('#diagnosis').val($(this).val())
      var currentInput = $(this).parent().parent();
       event.preventDefault();
       formEnterFunction(currentInput);
    });

    $("#iPhone, #android, #not_iPhone_or_android").click(function () {
      $('#phoneType').val($(this).val())
      var currentInput = $(this).parent().parent();
       event.preventDefault();
       formEnterFunction(currentInput);
    });

    $("#message_div input, #additional_comments_div, textarea").keypress(function (event) {
       if (event.which == 13) {
         $( "#thank_you_message" ).show().delay( 20000000 ).fadeOut( 4000000 );
         $('form').delay( 25000000 ).unbind('submit').submit();
           $('#progress_counter').hide();
           $('#message_div').hide();
           $('#additional_comments_div').hide();
           $('#no_clinical_study_message_div').hide();
       }
    });

    function backButtonFunction(currentInput) {
      count -= 1;
      if (count < 1) {
        count = 1;
      }
      currentInput.animate({height: 'toggle'}, 'slow').fadeOut(300);
      currentInput.prev().delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
      setTimeout(function () {
        currentInput.prev().find('input').focus()
      }, 1000);
      $('#count').text(count + '');
    }

    $("#backButton1").click(function () {
      var currentInput = $(this).parent();
      backButtonFunction(currentInput);
    });
    $("#backButton2").click(function () {
      var currentInput = $(this).parent().parent();
      backButtonFunction(currentInput);
    });
    $("#backButton3").click(function () {
      var currentInput = $(this).parent().parent();
      backButtonFunction(currentInput);
    });
    $("#backButton4").click(function () {
      var currentInput = $(this).parent().parent();
      backButtonFunction(currentInput);
    });
    $("#backButton5").click(function () {
      var currentInput = $(this).parent().parent();
      backButtonFunction(currentInput);
    });
    $("#backButton6").click(function () {
      var currentInput = $(this).parent();
      backButtonFunction(currentInput);
    });
    $("#backButton7").click(function () {
      var currentInput = $(this).parent();
      backButtonFunction(currentInput);
    });
    
    $("#messageBackButton").click(function () {
      $('#message_div').animate({height: 'toggle'}, 'slow').fadeOut(300);
      $('#question1').delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
    });
    $("#addtionalCommentsBackButton").click(function () {
      $('#additional_comments_div').animate({height: 'toggle'}, 'slow').fadeOut(300);
      $('#question8').delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
      $('#progress_counter').text('6/7');
      $('#progress_counter').fadeIn('slow')
    });


    // *******************************************************


});
