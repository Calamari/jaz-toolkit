
var jaz = require('../src/jaz');

var o = {
	count: 1
};
jaz.Number.times(4, function(x) {
	this.count += this.count;
}, o);
console.log("4 times:", o.count);

var obj = {
	doit: function(x) { return "->" + x; }
};

var foo = function(element, bla) {
	element.x = "gaetjgoie";
	return element.doit(bla);
};

obj.x = null;
obj.foo = jaz.Function.methodize(foo);
console.log("after:", obj.foo(23));
console.log(obj);

var testFunc = function(what) {
	console.log("printed: ", what);
};

testFunc("test");

var f = jaz.Function.wrap(testFunc, function(origFunc, what) {
	origFunc(what);
	console.log("or not?");
});

f("wrapp me");

Number.prototype['times'] = jaz.Function.methodize(jaz.Number.times);

(3).times(function(x) { console.log(x);});


console.log(jaz.Array.without([1,2,3,4], 1, 3, 5));
console.log(jaz.Array.last(["a","s","d","f"]));
console.log(jaz.Array.shuffle(["a","s","d","f"]));

