

$(document).on("click", "a", function() {
  var href = $(this).attr('href');
  var id = $(this).attr('id');

  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: id ? id : href,
    eventValue: href
  });
  
});
