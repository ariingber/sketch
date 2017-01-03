// CUSTOM FORM METHODS
$('#screenerQuestion2').hide();
$('#screenerMessage_div').hide();
$('#screenerSorry_message_div').hide();
// $('#additional_comments_div').hide();
$( "#thank_you_message" ).hide();

// UNIQUE BUTTONS
$("#screenerChoiceSendMessage").click(function (event) {
  $('#screenerQuestion1').animate({left: '150px'}, 'fast').fadeOut(300);
  $('#screenerMessage_div').delay(800).fadeIn(300);
  setTimeout(function () {
    $('#screenerMessage').focus();
    $('#screenerQuestion1').css({'left':'0'})
  }, 1000);
});

$("#screenerChoiceTryProducts").click(function (event) {
  $('#screenerQuestion1').animate({left: '150px'}, 'fast').fadeOut(300);
  $('#screenerQuestion2').delay(800).fadeIn(300);
  setTimeout(function () {
    $('#screenerQuestion1').css({'left':'0'})
  }, 1000);
});

$("#wont_try_clinical_study").click(function (event) {
  $('#screenerQuestion2').animate({left: '150px'}, 'fast').fadeOut(300);
  $('#screenerSorry_message_div').delay(800).fadeIn(300);
  setTimeout(function () {
    $('#screenerQuestion2').css({'left':'0'})
  }, 1000);
});

$("#screenerStart_over").click(function (event) {
  $('#screenerSorry_message_div').animate({left: '150px'}, 'fast').fadeOut(300);
  $('#screenerQuestion1').delay(800).fadeIn(300);
  setTimeout(function () {
    $('#screenerSorry_message_div').css({'left':'0'})
  }, 1000);
});


$("#message_div input, #additional_comments_div, textarea").keypress(function (event) {
   if (event.which == 13) {
     $( "#thank_you_message" ).show();
     $('form').delay( 2000000000000000 ).delay( 2000000000000000 ).delay( 2000000000000000 ).unbind('submit').submit();
       $('#progress_counter').hide();
       $('#message_div').hide();
       $('#additional_comments_div').hide();
       $('#no_clinical_study_message_div').hide();
   }
});

$(".subButton").click(function (event) {
  event.preventDefault();
   $( "#thank_you_message" ).show();
   $('form').delay( 2000000000000000 ).delay( 2000000000000000 ).delay( 2000000000000000 ).unbind('submit').submit();
     $('#progress_counter').hide();
     $('#message_div').hide();
     $('#additional_comments_div').hide();
     $('#no_clinical_study_message_div').hide();
});

function backButtonFunction(currentInput) {
  currentInput.animate({right: '150px'}, 'fast').fadeOut(300);
  currentInput.prev().delay(800).fadeIn(300);
  setTimeout(function () {
    currentInput.prev().find('input').focus()
    currentInput.css({'right':'0'})
    currentInput.css({'left':'0'})
  }, 1000);
  count -= 1;
  if (count < 1) {
    count = 1;
    $('#progress_counter').hide();
  }
  else {
    $('#count').text(count + '');
    $('#progress_counter').fadeOut('fast').delay(700).fadeIn(500);
  }
}

$(".backButtonType2").click(function () {
  var currentInput = $(this).parent();
  backButtonFunction(currentInput);
});

$("#screenerMessageBackButton").click(function () {
  $('#screenerMessage_div').animate({right: '150px'}, 'fast').fadeOut(300);
  $('#screenerQuestion1').delay(800).fadeIn(300);
  setTimeout(function () {
    $('#screenerMessage_div').css({'right':'0'})
  }, 1000);
});
