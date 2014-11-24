var gulp = require('gulp');
var webserver = require('gulp-webserver');

// Start development web server
gulp.task('default', function() {
  gulp.src('')
  .pipe(webserver({
    livereload: false,
    directoryListing: false,
    open: true
  }));
});
