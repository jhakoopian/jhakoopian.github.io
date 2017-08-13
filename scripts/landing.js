var animateText = function(){
  setInterval(function () {
    $('.tag-line').fadeTo(1000, 1).delay(500).fadeOut(750).delay(250);
  }, 250);
}

$(document).ready(function(){
  animateText();
});
