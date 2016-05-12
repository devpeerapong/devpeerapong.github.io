$('.love-counter > .button').click(function() {
  var icon = $(this).find('.mdi');
  if (icon.hasClass('mdi-heart')) {
    icon.removeClass('mdi-heart');
    icon.addClass('mdi-heart-outline');
  }
  else {
    icon.addClass('mdi-heart');
    icon.removeClass('mdi-heart-outline');
  }
})

var clipboard = new Clipboard('.copy-url > .icon');

$('.copy-url > .icon').click(function() {
  var noti = $(this).attr('notification');
  var notiDOM = $('div[alert=\"' + noti + '\"]');

  if(notiDOM.is(':visible')) return;
  notiDOM.fadeIn(300);
  setTimeout(function() {
    notiDOM.fadeOut(300);
  }, 2000)
})

$('.framit-upload').click(function() {
  $(this).hide();
  $('#framit-upload-btn').removeClass('hidden');
});

$('#cancel-upload').click(function() {
  $('.framit-upload').show();
  $('#framit-upload-btn').addClass('hidden');
});