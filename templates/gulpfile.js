// Deprecated file [7/31/15]

var gulp 				= require('gulp');
var gutil 			= require('gulp-util');
var del 				= require('del');
var install 		= require('gulp-install');
var zip 				= require('gulp-zip');
var request 		= require('request');
var fs 					= require('fs');
var runSequence = require('run-sequence');
var netrc 			= require('node-netrc');
var pkg		 			= require('./package.json');


var SITE_URL = 'http://localhost:3000';
var SITE_DOMAIN = 'localhost:3000';

 
gulp.task('clean', function(cb) {
  return del('./dist',
    del('./dist.zip', cb)
  );
});
 

gulp.task('js', function() {
  return gulp.src('index.js')
    .pipe(gulp.dest('dist/'))
});
 

gulp.task('npm', function() {
  return gulp.src('./package.json')
    .pipe(gulp.dest('./dist/'))
    .pipe(install({production: true}));
});
 

gulp.task('zip', function() {
  return gulp.src(['dist/**/*', '!dist/package.json', 'dist/.*'])
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
});
 

gulp.task('upload', function() {
	var data = {
		'deps' 								: Object.keys(pkg.dependencies),
		'index.js' 						: fs.createReadStream('./index.js')
	};
	if (pkg.description) { data.output_description = pkg.description; }
	var auth = netrc(SITE_DOMAIN);
	data[pkg.name + '.zip'] = fs.createReadStream('./dist.zip');
	return request({
		uri 			: SITE_URL + '/api/v1/i/' + pkg.name,
		method 		: 'PUT',
		formData 	: data,
		auth			: {
    	'user': auth.login,
    	'pass':  auth.password,
    	'sendImmediately': true
		}
	}, function (err, res, body) {
		if (err) { gutil.log(err); }
		gutil.log(JSON.parse(body).message);
	});
});


gulp.task('default', function(callback) {
  return runSequence(
    ['clean'],
    ['js', 'npm'],
    ['zip'],
    ['upload'],
    callback
  );
});