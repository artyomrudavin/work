// alert('Hello');

var a = {};
var b = [1, 2, 3, 'test'];

var c = new Object();
var d = new Array(1, 2, 3, 'test');



function Animal(newName, newColor) {
	var self = this;
	var abc = 'internal variable';

	newName = newName.toUpperCase();

	self.name = newName; // публичное свойство, можно вызвать из вне
	self.color = newColor;

	self.noise = function() { // публичные метод
		console.log('this is public method');
		self._noise();
	}

	self._noise = function() { // приватный метод
		alert('Hello, I am ' + self.name);
	}
}

var dog = new Animal('Jack', 'white');

console.log(dog.name);

dog.noise();