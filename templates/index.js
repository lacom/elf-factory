// Load any config vars from .env file
require('dotenv').config({ silent: true });

exports.handler = function(event, context) {
	// event.input [string] will contain any text submitted along with your command
	// event.client [string] will contain the client the command was submitted from, either "slack" or "sms"
	// event.value [string] will contain any value we are able to parse from event.input
  context.succeed('YOUR_EPIC_RESPONSE_GOES_HERE');
};