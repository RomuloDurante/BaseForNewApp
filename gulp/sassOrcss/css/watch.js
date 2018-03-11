/*
  Here you will create the automation for you app with gulp a gulp-watch
*/
var gulp = require('gulp'),
watch = require('gulp-watch'); // plugin that make the automation possible

gulp.task('watch', function() { //whatever change made in the file, the watch task will runing

  watch('./app/index.html', function() { 
    console.log("Html is watched!");
  });

  watch('./app/assets/**/*.css', function() {
    gulp.start('style');
    console.log('css have been tranfered to temp folder !');
  });

});