// Quote Hover jQuery
  $('.hiddenQuote').hide();
  $('.hiddenArrow').hide();
  $('.pressIcon').hover(function(event) {
    event.stopPropagation()
    $('.shownQuote').toggleClass('shownQuote hiddenQuote');
    $('.shownArrow').toggleClass('shownArrow hiddenArrow');
    switch ($(this).attr('id')) {
      case 'wiredIcon':
        $('#wiredQuote').toggleClass('hiddenQuote shownQuote').show();
        $('#wiredArrow').toggleClass('hiddenArrow shownArrow').show();
        break;
      case 'fastCompanyIcon':
        $('#fastCompanyQuote').toggleClass('hiddenQuote shownQuote').show();
        $('#fastCompanyArrow').toggleClass('hiddenArrow shownArrow').show();
        break;
      case 'crainsIcon':
        $('#crainsQuote').toggleClass('hiddenQuote shownQuote').show();
        $('#crainsArrow').toggleClass('hiddenArrow shownArrow').show();
        break;
      case 'forbesIcon':
        $('#forbesQuote').toggleClass('hiddenQuote shownQuote').show();
        $('#forbesArrow').toggleClass('hiddenArrow shownArrow').show();
        break;
      case 'wallStreetIcon':
        $('#wallStreetQuote').toggleClass('hiddenQuote shownQuote').show();
        $('#wallStreetArrow').toggleClass('hiddenArrow shownArrow').show();
        break;
      case 'techCrunchIcon':
        $('#techCrunchQuote').toggleClass('hiddenQuote shownQuote').show();
        $('#techCrunchArrow').toggleClass('hiddenArrow shownArrow').show();
        break;
    }
    $('.hiddenArrow').hide();
    $('.hiddenQuote').hide();
  });
