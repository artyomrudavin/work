// exports
// global
// global.User = User;

// module.exports = exports = this

var db = require('../db');
db.connect();

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
// ...
  console.log(db.getPhrase("Hello") + ", " + who.name);
};

// ...
module.exports = User;

// console.log('user.js is required!');
// exports.User = User;
// console.log(module);
