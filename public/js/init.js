$(document).ready(function(){
  // Nav bar to the side on mobile
  $(".button-collapse").sideNav();


  // load more press release
  $('#div7').hide();
  $('#div8').hide();
  $('#div9').hide();
  $('#div10').hide();
  $('#div11').hide();
  $('#div12').hide();
  $('#div13').hide();
  $('#div14').hide();
  $('#div15').hide();
  $('#div16').hide();
  $('#div17').hide();
  $('#div18').hide();
  $('#div19').hide();
  $('#div20').hide();

  $('#loadMoreButton').click(function() {
      $('#div1').attr( "id", "" ).hide().next().attr( "id", "div1" );
      $('#div6').attr( "id", "div5" ).next().show().attr( "id", "div6" );
      if ($('#div6').hasClass('last')) {
        $('#loadMoreButton').css({"cursor":"not-allowed","pointer-events":"none", "color": "#c0c0c0", "background-color": "#ffffff", "border":"solid #c0c0c0 1px"});
      }
      $('#div1').show();
      $('#div2').show();
      $('#div3').show();
      $('#div4').show();
      $('#div5').show();
      $('#div6').show();
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

    // build better habbits CAROUSEL for mobile ***************************************************
    $('.carousel.carousel-slider#build_better_habbits_carousel_ipad').carousel({full_width: true});
    $('.carousel.carousel-slider#breathsmart_carousel_ipad').carousel({full_width: true});
    $('.carousel.carousel-slider#breathsmart_carousel_iphone').carousel({full_width: true});

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
        case 4:
          $('#press_release_arrow_right').show();
          break;
        case 3:
          $('#press_release_arrow_right').show();
          break;
        case 2:
          $('#press_release_arrow_right').show();
          break;
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
          $('#press_release_arrow_left').show();
          break;
        case 3:
          $('#press_release_arrow_left').show();
          break;
        case 4:
          $('#press_release_arrow_left').show();
          break;
        case 5:
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

    $('.scrollspy').scrollSpy({scrollOffset:200});

    // for form select
    $('select').material_select();
    // ###############################

    // our founders js
    $('#ourFoundersSmall').hide();
    if (window.location.pathname.includes("/about")) {
      if ($( window ).width() < 1288) {
        $('#ourFoundersSmall').show();
      }
      else {
        $('#ourFoundersSmall').hide();
      }
      $( window ).resize(function() {
        if ($( window ).width() < 1288) {
          $('#ourFoundersSmall').show();
        }
        else {
          $('#ourFoundersSmall').hide();
        }
      });
    }

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



});
