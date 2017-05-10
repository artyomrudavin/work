var counter = 0;

function someFunction() {
	console.log('it works!, counter =', counter);
	counter++;
	if (counter === 5) {
		clearInterval(timerId);
	}
}

var timerId = setInterval(someFunction, 1000);
