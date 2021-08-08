$(function() {
  var paraTag = $('input#submit').parent('div');
  $(paraTag).children('input').remove();
  $(paraTag).append(' <input type="button" id="submit" name="submit" class="custom-button-small1 background1" value="Send message">');

  $('#main input#submit').click(function() {
    $('#main').append('');

    var name = $('input#name').val();
    var email = $('input#email').val();
    var subject = $('input#subject').val();
    var comments = $('textarea#comments').val();

    $.ajax({
      type: 'post',
      url: 'sendEmail.php',
      data: 'name=' + name + '&email=' + email + '&subject=' + subject + '&comments=' + comments,

      success: function(results) {
      $('#main img').fadeOut(1000);
      $('ul#response').html(results);
      }
      }); 
  });
});
		