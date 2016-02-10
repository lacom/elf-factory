var pkg = require('./package.json');

module.exports = function() {
	return {
	  APP_NAME          : pkg.name,
	  VERSION           : pkg.version,
	  API_MAJOR_VERSION : 'v1',
		HOST              : 'api.lightninginabot.com'
	};
};