$(document).ready(function(){

  // takes a String of all the letters and "splits" them into an array called alphabet
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // a count of the number of characters typed so far, so we can easily delete them
  var lettercount = 0;

  // for each letter in the array, add the Mousetrap function to it
  // basically just adds the text in the form:
  // <img class="1" src="images/a.png">
  alphabet.forEach(function(letter) {
    Mousetrap.bind(letter, function() {
        lettercount++;
        $('body').append("<img class=\"" + lettercount + "\" src=\"images2\/" + letter + ".png\">");
        console.log("<img class=\"" + lettercount + "\" src=\"images2\/" + letter + ".png\">");
    });
  });

  // set the backspace button to delete the last typed character
  Mousetrap.bind('backspace', function() {
      $("." + lettercount).remove();
      lettercount--;
  });

  // set the space button to add the "e" character, but with visibility:hidden, so it won't appear but will
  // still take up space. This would look like:
  // <img style="visibility:hidden;" class="5" src="images/e.png">
  Mousetrap.bind('space', function() {
      lettercount++;
      $('body').append("<img style=\"visibility:hidden;\" class=\"" + lettercount + "\" src=\"images\/e.png\">");
  });



});