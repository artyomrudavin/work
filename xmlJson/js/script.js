var animal = {
	name: 'Jack',
	color: 'white',
	age: 12
};

var str = JSON.stringify(animal);

console.log(str);

var obj = JSON.parse(str);

console.log(obj);

var test = JSON.parse('{"test": "content", "test2": "content2"}');

console.log(test);
