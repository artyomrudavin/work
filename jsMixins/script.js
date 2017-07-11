var extend = function(target) {
	if(!arguments[1]) {
		return;
	}

	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];

		for (var prop in source) {
			if (!target[prop] && source.hasOwnProperty(prop)) {
				target[prop] = source[prop];
			}
		}
	}
};

var Track = function(name) {
	this.name = name;
};

// Track.prototype.getName = function() {
// 	return this.name;
// };

// Track.prototype.play = function() {
// 	console.log(this.name = ' started playing');
// };

var Playlist = function(name) {
	this.name = name;
};

// Playlist.prototype.getName = function() {
// 	return this.name;
// };

// Playlist.prototype.play = function() {
// 	console.log(this.name = ' started playing');
// };

var nameMixin = {
	getName: function() {
		return this.name;
	}
};

var controlMixin = {
	play: function() {
		console.log(this.name + ' started playing');
	}
};

// $.extend(Track.prototype, nameMixin, controlMixin);
// $.extend(Playlist.prototype, nameMixin, controlMixin);

extend(Track.prototype, nameMixin, controlMixin);
extend(Playlist.prototype, nameMixin, controlMixin);

var superTrack = new Track('Super track');

var coolPlaylist = new Playlist('Cool playlist');

console.log(superTrack);
console.log(superTrack.getName());
superTrack.play();
console.log(coolPlaylist);
console.log(coolPlaylist.getName());
coolPlaylist.play();
