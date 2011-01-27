
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

//Number.prototype['times'] = jaz.Function.methodize(jaz.Number.times);


jaz.enhancePrototype('Number', 'times');

(3).times(function(x) { console.log(x);});

jaz.enhancePrototype('Array', ['without', 'last']);

console.log([1,2,3,4].without(1, 3, 5));
console.log(["a","s","d","f"].last());
console.log(jaz.Array.shuffle(["a","s","d","f"]));

console.log(jaz.Array.uniq([1, 3, 5, 3, 4, 5, 1]));
console.log(jaz.Array.uniq(5));


Object.defineProperty(Object.prototype, 'foo', {
	value: function() { console.log(333); },
	enumarable: false
});
Object.prototype.bla = 3;

var x = {};
x.foo();

var o = [];
o.foo();

var d = 432;
for (var i in d) console.log(i);

var a = {
	foo: 42
};

jaz.Object.careExtend(a, {
	foo: 23,
	bla: 'blubb'
});
console.log(a);
