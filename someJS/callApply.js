// alert('Hello!');

// call/apply
// calculate.call(context, arg1, arg2, ...);
// calculate.apply(context, [arg1, arg2, ...]);

function calculateMoney(a, b) {
	console.log(this);
	console.log('I am ' + this.firstName + ' ' + this.lastName + ' have ' + (a + b) + ' dollars');
}

var context = {
	firstName: 'Vasya',
	lastName: 'Pupkin'
};

calculateMoney.call(context, 5, 3); // аргументы передаются отдельно каждый, неудобно
calculateMoney.apply(context, [5, 3]); // использует массив аргументов

function printArguments() {
	var args = [].slice.call(arguments); // используем метод функции slice() для создания массива из псевдо-массива arguments, чтобы можно было использовать методы массовов
	
	console.log('arguments = ', arguments);

	//arguments.push('test'); // пример отсутствия метов массива
	args.push('test'); // демонстрация использования метода массива к псевдо-массиву arguments

	console.log(args); 
}

printArguments(1, 2, 3);