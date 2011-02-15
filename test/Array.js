var testCase = require('nodeunit').testCase;

module.exports = testCase({
	test1: function(test) {
		test.ok(true);
		test.equal(true, false);
	}
});
