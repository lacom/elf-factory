/***************************************************
Utilities used throughout elf-factory.

PLEASE CHECK TO MAKE FUNCTIONS ARE PROVIDED REQUIRED 
DEPENDENCIES!

THANKS! 
****************************************************/

var os = require('os');
var fs = require('fs');
var mkdirp = require('mkdirp');
var readline = require('readline');
var path = require('path');


var _exit = process.exit;


module.exports = {

	/**
	 * URL friendly string
	 *
	 * @param {String} str
	 */
	slugify: function(str) {
	  return str.toString().toLowerCase()
	    .replace(/\s+/g, '-')        // Replace spaces with -
	    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
	    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
	    .replace(/^-+/, '')          // Trim - from start of text
	    .replace(/-+$/, '');         // Trim - from end of text
	},


	/**
	 * echo str > path.
	 *
	 * @param {String} path
	 * @param {String} str
	 */
	write: function(path, str, mode) {
	  fs.writeFileSync(path, str, { mode: mode || 0666 });
	  console.log('   \x1b[36mcreate\x1b[0m : ' + path);
	},


	/**
	 * Mkdir -p.
	 *
	 * @param {String} path
	 * @param {Function} fn
	 */
	mkdir: function(path, fn) {
	  mkdirp(path, 0755, function(err){
	    if (err) throw err;
	    console.log('   \033[36mcreate\033[0m : ' + path);
	    fn && fn();
	  });
	},


	/**
	 * Check if the given directory `path` is empty.
	 *
	 * @param {String} path
	 * @param {Function} fn
	 */
	emptyDirectory: function(path, fn) {
	  fs.readdir(path, function(err, files){
	    if (err && 'ENOENT' != err.code) throw err;
	    fn(!files || !files.length);
	  });
	},


	/**
	 * Determine if launched from cmd.exe
	 */
	launchedFromCmd: function() {
	  return process.platform === 'win32'
	    && process.env._ === undefined;
	},


	/**
	 * Load template file.
	 */
	loadTemplate: function(name) {
	  return fs.readFileSync(path.join(__dirname, '..', 'templates', name), 'utf-8');
	},


	/**
	 * Prompt for confirmation on STDOUT/STDIN
	 */

	confirm: function(msg, callback) {
	  var rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	  });

	  rl.question(msg, function (input) {
	    rl.close();
	    callback(/^y|yes|ok|true$/i.test(input));
	  });
	},


	/**
	 * Graceful exit for async STDIO
	 */
	exit: function(code) {
	  // flush output for Node.js Windows pipe bug
	  // https://github.com/joyent/node/issues/6247 is just one bug example
	  // https://github.com/visionmedia/mocha/issues/333 has a good discussion
	  function done() {
	    if (!(draining--)) _exit(code);
	  }

	  var draining = 0;
	  var streams = [process.stdout, process.stderr];

	  module.exports.exit.exited = true;

	  streams.forEach(function(stream){
	    // submit empty write request and wait for completion
	    draining += 1;
	    stream.write('', done);
	  });

	  done();
	}
	
};