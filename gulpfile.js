var gulp        = require('gulp');
var gutil       = require('gulp-util');
var babel       = require('gulp-babel');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function() {
  browserSync.init({
    open: false,
    notify: false,
    server: {
      baseDir: "./",
      index: "html/index.html",
      directory: true
    }
  });
});

gulp.task('js', function () {
  return gulp.src('./src/app.jsx')
  .pipe(babel({
    presets: ["react", "es2015"]
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('./src/app.jsx', ['js']);
});
