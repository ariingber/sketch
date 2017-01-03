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
