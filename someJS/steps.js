function runner() {
  this.steps = 0;
  
  this.step = function() {
    this.doSomethingHeavy();
    this.steps++;
  };

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  };

  this.doSomethingHeavy = function() {
    for (var i = 0; i < 25; i++) {
      this[i] = fib(i);
    }
  };
}

var runner1 = new runner;
var runner2 = new runner;

// запускаем бегунов
var t1 = setInterval(function() {
  runner1.step();
}, 15);

var t2 = setTimeout(function go() {
  runner2.step();
  t2 = setTimeout(go, 15);
}, 15);

// кто сделает больше шагов?
setTimeout(function() {
  clearInterval(t1);
  clearTimeout(t2);
  alert(runner1.steps);
  alert(runner2.steps);
}, 5000);
