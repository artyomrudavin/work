$(function() {

	var html = $('#test').html();
  var articles = [
  {
    title: 'Article 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil necessitatibus, nisi consequuntur, quis, numquam et recusandae, quasi nulla aliquam animi magnam. Earum cumque quos veritatis quas assumenda, provident dolorum itaque!'
  },
  {
    title: 'Article 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: 'Article 3',
    content: 'Tempore enim dolore velit doloremque saepe officia, mollitia natus ullam ratione debitis placeat ex laborum quia aliquid culpa illo temporibus dicta officiis.'
  }
  ];

  var content = tmpl(html, {
    data: articles
  });

  $('body').append(content);

});