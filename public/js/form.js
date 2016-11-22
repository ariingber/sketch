(function(){
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

  $("#wont_try_clinical_study").click(function (event) {
    $('#question2').animate({left: '150px'}, 'fast').fadeOut(300);
    $('#sorry_message_div').delay(800).fadeIn(300);
    setTimeout(function () {
      $('#question2').css({'left':'0'})
    }, 1000);
  });

  $("#start_over").click(function (event) {
    $('#sorry_message_div').animate({left: '150px'}, 'fast').fadeOut(300);
    $('#question1').delay(800).fadeIn(300);
    setTimeout(function () {
      $('#sorry_message_div').css({'left':'0'})
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
     $('#progress_counter').fadeOut('fast').delay(700).fadeIn(500);
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


  // $("#question3 input").keypress(function (event) {
  //   var currentInput = $(this).parent().parent();
  //    if (event.which == 13) {
  //      event.preventDefault();
  //      formEnterFunction(currentInput);
  //      event.stopPropagation();
  //    }
  // });
  //
  // $("#question4 input").keypress(function (event) {
  //   var currentInput = $(this).parent().parent();
  //    if (event.which == 13) {
  //     event.preventDefault();
  //      formEnterFunction(currentInput);
  //    }
  // });
  //
  // $("#question5 input").keypress(function (event) {
  //   var currentInput = $(this).parent().parent();
  //    if (event.which == 13) {
  //      event.preventDefault();
  //      formEnterFunction(currentInput);
  //     }
  //   });

  $(".question input").keypress(function (event) {
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
       $( "#thank_you_message" ).show().delay( 200000000 ).fadeOut( 4000000 );
       $('form').delay( 25000000 ).unbind('submit').submit();
         $('#progress_counter').hide();
         $('#message_div').hide();
         $('#additional_comments_div').hide();
         $('#no_clinical_study_message_div').hide();
     }
  });
  $(".subButton").click(function (event) {
    event.preventDefault();
     $( "#thank_you_message" ).show().delay( 20000000 ).fadeOut( 4000000 );
     $('form').delay( 25000000 ).unbind('submit').submit();
       $('#progress_counter').hide();
       $('#message_div').hide();
       $('#additional_comments_div').hide();
       $('#no_clinical_study_message_div').hide();
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
    $('#progress_counter').fadeOut('fast').delay(700).fadeIn(500);
  }

  $("#backButton1").click(function () {
    var currentInput = $(this).parent();
    currentInput.animate({height: 'toggle'}, 'slow').fadeOut(300);
    currentInput.prev().delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
  });

  $("#backButtonFirstName").click(function () {
    var currentInput = $(this).parent().parent();
    currentInput.animate({height: 'toggle'}, 'slow').fadeOut(300);
    currentInput.prev().delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
    $('#progress_counter').fadeOut('fast')
  });

  $(".backButtonType1").click(function () {
    var currentInput = $(this).parent().parent();
    backButtonFunction(currentInput);
  });

  // $("#backButton4").click(function () {
  //   var currentInput = $(this).parent().parent();
  //   backButtonFunction(currentInput);
  // });
  // $("#backButton5").click(function () {
  //   var currentInput = $(this).parent().parent();
  //   backButtonFunction(currentInput);
  // });
  $(".backButtonType2").click(function () {
    var currentInput = $(this).parent();
    backButtonFunction(currentInput);
  });
  // $("#backButton7").click(function () {
  //   var currentInput = $(this).parent();
  //   backButtonFunction(currentInput);
  // });

  // $("#addtionalCommentsBackButton").click(function () {
  //   var currentInput = $(this).parent();
  //   backButtonFunction(currentInput);
  // });

  $("#messageBackButton").click(function () {
    $('#message_div').animate({height: 'toggle'}, 'slow').fadeOut(300);
    $('#question1').delay(900).animate({height: 'toggle'}, 'slow').fadeIn(500);
  });
})();
