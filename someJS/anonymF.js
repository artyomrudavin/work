// alert('Hello!');

// anonymous function
var element = document.getElementById('text');

element.addEventListener('click', function() {
  alert('test');
});

// new Function

// function double(a) {
//   console.log(a*2);
// }

var double = new Function('a', 'console.log(a*2)');

double(5);