var pkg = require('./package.json');

module.exports = function() {
	return {
	  APP_NAME 			: pkg.name,
	  VERSION  			: pkg.version,
		SITE_URL 			: 'https://api.lightninginabot.com/v1',
		SITE_DOMAIN		: 'api.lightninginabot.com'
	};
};