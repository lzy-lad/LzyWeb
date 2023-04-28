$(document).ready(function() {
  var titleFonts = ['Montserrat', 'Raleway', 'Open Sans'];
  var bodyFonts = ['Roboto', 'Lato', 'Source Sans Pro'];
  
  function randomFont(fontArray) {
    var randomNumber = Math.floor(Math.random() * fontArray.length);
    return fontArray[randomNumber];
  }
  
  $('#font-switch').hover(function() {
    var titleFont = randomFont(titleFonts);
    var bodyFont = randomFont(bodyFonts);
    
    $('h1, h2, h3, h4, h5, h6').css('font-family', titleFont);
    $('p, ul, ol, li, a').css('font-family', bodyFont);
  }, function() {
    // Reset to default font
    $('h1, h2, h3, h4, h5, h6').css('font-family', '');
    $('p, ul, ol, li, a').css('font-family', '');
  });
});
