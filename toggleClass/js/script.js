// alert('Hello world!');

// $('body').css('background-color', 'blue');

$('p').on('click', function() {
	$(this).toggleClass('green', 1000, 'easeOutSine');
});