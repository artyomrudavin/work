// jQuery | $

// document.addEventListener('DOMContentLoaded', function() {
//   console.log('DOMContentLoaded');
// });

// Sizzle

// chaining - цепочки вызовов

$(function() {

  // document.querySelectorAll
  var $element = $('.wrapper'); // $element - обозначение jQuery объекта

  // $element.removeClass('wrapper');

  var $links = $('a');
  // console.log($element);

  $links.addClass('red');

  $links
  .css({
    color: 'white',
    background: 'black'
  });
    // .attr('href', 'http://google.com/');

    $links.remove();

    $('.wrapper').append($links);

// on ('', function() {}) - добавляет событие
// one ('', function() {}) - добавляет "одноразовое" событие
// off ('', function() {}) - удаляет событие

  // $links.on('click', function() {
  //   alert('test');
  // });

  // $links.hover(
  //   function() {
  //     console.log('hover in');
  //   },
  //   function() {
  //     console.log('hover out');
  //   }
  // );

  $links.on('click', function(event) {
    $(this).animate({
      opacity: 0.5,
      fontSize: "+=10"
    }, 2000, function() {
      alert('animation complete');
    })
  });  

});