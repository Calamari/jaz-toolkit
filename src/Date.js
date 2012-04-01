/**
 * Date enhancements
 */
module.exports = {
	toMySQLString: function(date) {
		return date.toISOString().replace('T', ' ').split('.')[0];
	}
};
