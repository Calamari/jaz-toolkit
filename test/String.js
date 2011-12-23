var vows = require('vows'),
	assert = require('assert'),
	jaz = require('../src/jaz');


//module.exports = 
vows.describe('Jaz.String')
.addBatch({
	'has method': {
		topic: jaz.String,
		
		'beginsWith': function(S) {
			assert.isTrue(S.beginsWith('foobar', 'foo'));
			assert.isFalse(S.beginsWith('^foobar', 'foo'));
			assert.isTrue(S.beginsWith('foöbar$', 'foö'));
			assert.isTrue(S.beginsWith('bla$foöbar$', 'bla$'));
		},

		'endsWith': function(S) {
			assert.isFalse(S.endsWith('foobar', 'foo'));
			assert.isTrue(S.endsWith('foobar', 'bar'));
			assert.isFalse(S.endsWith('^foobar', 'foo'));
			assert.isFalse(S.endsWith('foöbar$', 'bar'));
			assert.isTrue(S.endsWith('bla$foö^bar', '^bar'));
		}
	}
}).export(module);
