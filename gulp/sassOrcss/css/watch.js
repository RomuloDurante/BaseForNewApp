/*
  Here you will create the automation for you app with gulp a gulp-watch
*/
var gulp = require('gulp'),
watch = require('gulp-watch'), // plugin that make the automation possible
browserSync = require('browser-sync').create(); //inject css and reload the browser

gulp.task('watch', function() { //whatever change made in the file, the watch task will runing

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() { 
    browserSync.reload();
  });

  watch('./app/assets/**/*.css', function() {
    gulp.start('cssInject');
    console.log('css have been tranfered to temp folder !');
  });

});

gulp.task('cssInject',['style'], function() {
  return gulp.src('./app/temp/styles/style.css')
  .pipe(browserSync.stream());
});