var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();


gulp.task('default', ['copy-files', 'babel-stuff'], function(){
	browserSync.init({
		server : {
			baseDir : "./dist"
		}
	});

	gulp.watch('src/js/*.js', ['copy-files', 'babel-stuff', 'reload']);	

});



gulp.task('babel-stuff',['copy-files'],function(){
	return gulp.src('src/js/*.js')
			.pipe(babel())
			.pipe(gulp.dest('dist/js/'));
});


gulp.task('copy-files', function(){
	return gulp.src(['src/*.html', 'src/*.css'])
			.pipe(gulp.dest('dist/'))
});


gulp.task('reload', ['babel-stuff'], function(){
	console.log('now iam reloading...');
	browserSync.reload();
	// browserSync.reload;
});