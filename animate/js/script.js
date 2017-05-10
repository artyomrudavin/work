// FPS - Frames Per Second


// javascript animation
function slideLeft(el, duration, slideLength) {
  var leftPosition = parseInt(el.style.left) || 0;
  var time = 0;
  var fps = 50;

  console.log(leftPosition);

  var interval = setInterval(function() {

    if (time > duration) {
      clearInterval(interval);
    }

    leftPosition += slideLength/(duration/fps);
    time += duration/fps;
    el.style.left = leftPosition + 'px';

  }, duration/fps);
};

var box = document.querySelector('.js-box');

box.addEventListener('click', function() {
  slideLeft(box, 1000, 200);
});

//jquery animation
$('.jquery-box').on('click', function() {
  $(this).animate({
    left: '+=100'
  }, 1000);
});

//css animation
$('.css-box').on('click', function() {
  $(this).addClass('css-box-animated');
});