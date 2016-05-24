Change Log
- - -
## v0.4.5 (5/24/16)
- Node description, expressions, and keys can now be added to config.json and updated on the server when "liab upload" is called.
## v0.4.4 (5/4/16)
- Added check for config.id in "init" command. Will prompt usage of "upload" command if Id exists.
## v0.4.3 (4/28/16)
- Updated exports.handler boilerplate code to reflect Lambda Node.js v4 runtime changes
## v0.4.2 (4/27/16)
- Added "host" property to "event" argument
## v0.4.1 (4/12/16)
- Support for new "callback" argument in event.handler (only Node.js v4 Lambda runtime)
## v0.4 (4/7/16)
- Removed "dotenv" dependency for projects
- Updated liab-test to look for test cases in test.json, rather than being passed through command line
- The test event in liab-test now contains a "bot" property to pass test bot objects into the node
- Added config.json to store project info
## v0.3.5 (3/17/16)
- Happy birthday to me. What'd I get? A timer in the test method!
## v0.3.4 (2/10/16)
- Improved handling of different environments; use -e CLI option to send request to localhost
- New package name round 2! Hello, LIAB!
## v0.3.3 (1/7/16)
- init command saves the node's id to projects .env file
- upload command now uses update /nodes/{NODE_ID}/upload route
## v0.3.2 (12/28/15)
- test command now works with promises
- new init command decouples creation of node on server with updating of node
## v0.3.1 (8/30/15)
- New package name! Hello, Nerul.
## v0.3.0 (8/9/15)
- Package.json repo url now sent to Elf on upload
## v0.2.2 (8/6/15)
- Added lib/ to array of files in package.json
## v0.2.1 (8/6/15)
- Fixed bug with upload command
## v0.2.0 (8/5/15)
- Added "open [name]" command
