
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
	Object: ['keys', 'values', 'functions', 'extend', 'clone', 'tap', 'isEqual', 'isEmpty', 'isElement', 'isArray', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isBoolean', 'isDate', 'isRegExp', 'isNaN', 'isNull', 'isUndefined'],
	Function: ['bind', 'bindAll', 'memoize', 'delay', 'defer', 'throttle', 'debounce', 'wrap', 'compose']
};

var jaz = {
	'Array': enhanceObject(enhanceObject(require('./Array'), underscoreEnhance.Array), underscoreEnhance.Collection),
	'Number': require('./Number'),
	'Function': enhanceObject(require('./Function'), underscoreEnhance.Function),
	'Object': enhanceObject(enhanceObject(require('./Object'), underscoreEnhance.Object), underscoreEnhance.Collection)
};

module.exports = jaz;
