var gulp        = require('gulp');
var gutil       = require('gulp-util');
var babel       = require('gulp-babel');
var browserSync = require('browser-sync');
var eslint      = require('gulp-eslint');
var notify       = require('gulp-notify');

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
  .pipe(eslint())
  .pipe(babel({
    presets: ["react", "es2015"]
  }))
  .on("error", notify.onError(function (error) {
    return "Error - Sass: " + error.message;
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('./src/app.jsx', ['js-watch']);
});
