/**
 * Number enhancement 
 */
module.exports = {
	times: function(val, callbackfn, thisArg) {
		for(var i=1; i<=val; ++i) {
			callbackfn.call(thisArg || this, i);
		}
	}
};
