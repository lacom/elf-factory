var pkg = require('./package.json');

module.exports = function() {
	return {
	  APP_NAME 			: pkg.name,
	  VERSION  			: pkg.version,
		SITE_URL 			: 'https://lambda.herokuapp.com',
		SITE_DOMAIN		: 'lambda.herokuapp.com'
	};
};