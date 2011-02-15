
var underscore = require('../vendor/underscore');

function enhanceObject(obj, methods) {
	methods.forEach(function(method) {
		obj[method] = underscore[method];
	});
	return obj;
}

var underscoreEnhance = {
	Array: ['first', 'last', 'rest', 'compact', 'flatten', 'without', 'uniq', 'intersect', 'zip', 'indexOf', 'lastIndexOf', 'range'],
	Collection: ['each', 'map', 'reduce', 'reduceRight', 'detect', 'select', 'reject', 'all', 'any', 'include', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size'],
	Object: ['values', 'functions', 'extend', 'clone', 'tap', 'isEqual', 'isEmpty', 'isElement', 'isArray', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isBoolean', 'isDate', 'isRegExp', 'isNaN', 'isNull', 'isUndefined'],
	Function: ['bind', 'bindAll', 'memoize', 'delay', 'defer', 'throttle', 'debounce', 'wrap', 'compose']
};

var jaz = {
	'Array': enhanceObject(enhanceObject(require('./Array'), underscoreEnhance.Array), underscoreEnhance.Collection),
	'Number': require('./Number'),
	'Function': enhanceObject(require('./Function'), underscoreEnhance.Function),
	'Object': enhanceObject(enhanceObject(require('./Object'), underscoreEnhance.Object), underscoreEnhance.Collection),
	'String': require('./String'),

	/**
	 * Adds all or only some methods to the appropriate Object.prototype
	 * @params {String} which Which Property to should be enhanced?
	 * @params {String|String[]} [only] If set mehtod will only enhance object with given methods
	 */
	enhancePrototype: function(which, only) {
		if (!jaz[which]) return null;
		var enhanceAll = typeof only === 'undefined';
		only = Array.isArray(only) ? only : [only];

		jaz.Object.each(jaz[which], function(value, key) {
			if (enhanceAll || only.indexOf(key) !== -1) {
				Object.defineProperty(global[which].prototype, key, {
					value: jaz.Function.methodize(value),
					enumarable: false
				});
			}
		});
	}
};



module.exports = jaz;
