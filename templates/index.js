// Load any config vars from .env file
require('dotenv').config({ silent: true });

exports.handler = function(event, context) {
  context.succeed('YOUR_EPIC_RESPONSE_GOES_HERE');
};