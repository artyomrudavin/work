// http://xmlhttprequest.ru/
// https://ru.wikipedia.org/wiki/AJAX
// https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP
// https://ru.wikipedia.org/wiki/Правило_ограничения_домена

function GoogleCallback() {
	console.log('data', data);
}


$(function() {

	$.ajax({
		url: // key ?????
		'http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=AIzaSyDkdHMRKfrMYrk3iv7t4cd0gdlKlq6pO9M&rsz=large&q=' + 'test' + '&callback=GoogleCallback&context=?',
		dataType: 'jsonp',
		success: function() {

		},
		error: function() {

		}
	});



});
