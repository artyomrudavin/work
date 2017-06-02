// все методы массивов, функций, объектов хранятся в прототипах. Это делается для экономии места

var animal = {
	name: 'Jack',
	age: 2
};

var cat = {
	age: 3
};

cat.__proto__=animal;

// console.log('cat.name', cat.name);

function World() {
	this.sky = 'blue';
}

function Company() {
	this.name = 'Google';
	this.people = 10000;
}

Company.staticProperty = 123; // в функцию можно записывать свойства, потому что ф-ция это тоже объект

Company.prototype.sayHello = function() { // экономит память за счет создания и хранения метода в памяти прототипа
	alert('Hello World!');
}

var newCompany1 = new Company();
var newCompany2= new Company();
var newCompany3 = new Company();

newCompany1.sayHello();
