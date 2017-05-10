// alert('Hello, Artyom!!!');

// function expression

console.log(double); // undefined переменная есть
// double(6); // error не функция

var double = function(a) {
	console.log(a*2);
}

var userFunction;

if (+prompt('Введите число')) {
	userFunction = function() {
		alert(true);
	}
} else {
	userFunction = function() {
		alert(false);
	}
}

userFunction();

double(4);

triple(5); // 15 работает до объявления функции


// function declaration
function triple(a) {
	console.log(a*3);
}

triple(4);