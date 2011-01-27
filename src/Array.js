/**
 * Function enhancements
 */
module.exports = {
	/*without: function(arr) {
		var args = arguments;
		return arr.filter(function(x) {
			var isIn = false;
			for (var i=args.length; i-->1;) {
				isIn = isIn || x == args[i];
			}
			return !isIn;
		});
	},
	last: function(arr) {
		return arr.length ? arr[arr.length - 1] : undefined;
	},*/
	/**
	 * Shuffles the array
	 * Implementation borrowed from Ryan Tenney: https://prototype.lighthouseapp.com/projects/8886/tickets/721-add-shuffle-method-to-arrays
	 */
	shuffle: function(arr) {
		var shuffled = [], rand;
		arr.forEach(function(value, index) {
			if (index == 0) {
				shuffled[0] = value;
			} else {
				rand = Math.floor(Math.random() * (index + 1));
				shuffled[index] = shuffled[rand];
				shuffled[rand] = value;
			}
		});
		return shuffled;
	},
	copy: function(arr) {
		return arr.concat();
	}
};
