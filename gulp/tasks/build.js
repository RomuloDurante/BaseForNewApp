var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
usemin = require('gulp-usemin'),
browserSync = require('browser-sync').create(); //inject css and reload the browser


gulp.task('viewDist', function() {
  browserSync.init({
    server: {
      notify: false,
      baseDir: "dist"
    }
  });
});

gulp.task('deleteDistFolder', function(){
  return del("./dist");
});

gulp.task('optimizeImages',['deleteDistFolder'], function() {
  return gulp.src("./app/assets/images/**/*")
    .pipe(imagemin({
      progressive: true, //improve jpeg
      interlaced: true, //gif images
      multipass: true   //svg files
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin',['deleteDistFolder','scripts','style'], function(){
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css: [function(){return cssnano()}],
    js: [function(){return uglify()}]
  }))
  .pipe(gulp.dest("./dist"));
});


gulp.task('build',['deleteDistFolder','optimizeImages','usemin']);
