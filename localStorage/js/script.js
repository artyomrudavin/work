var dog = {
	name: 'Jack',
	color: 'white',
	age: 2
}

localStorage.setItem('animal', JSON.stringify(dog)); // записать объект в localStorage


var test = localStorage.getItem('animal'); // взять объект из localStorage

test = JSON.parse(test);

console.log(test);

localStorage.clear(); // очистить localStorage

localStorage.removeItem(''); // удалить ключ