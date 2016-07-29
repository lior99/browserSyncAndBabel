var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var browserify  = require('browserify');
var transform = require('vinyl-transform');



gulp.task('default', ['copy-files', 'browserify','babelify'], function(){
	browserSync.init({
		server : {
			baseDir : "./dist"
		}
	});

	gulp.watch('src/js/*.js', ['copy-files', 'browserify','babelify', 'reload']);	

});



gulp.task('babelify',['copy-files'],function(){
	return gulp.src('./src/js/*.js')
			.pipe(babel())
			.pipe(gulp.dest('dist/js/'));
});


gulp.task('browserify', function(){
	var browserified = transform(function(filename) {
    	var b = browserify(filename);
    	return b.bundle();
  	});	

  	return gulp.src(['src/*.js'])
    .pipe(browserified)
    .pipe(gulp.dest('dist'));
});



gulp.task('copy-files', function(){
	return gulp.src(['./src/*.html', './src/*.css'])
			.pipe(gulp.dest('dist/'))
});


gulp.task('reload', ['babelify'], function(){
	console.log('now iam reloading...');
	browserSync.reload();
	// browserSync.reload;
});