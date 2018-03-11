/*
  Here you will create the css tasks 
*/
var gulp = require('gulp'),
postCss = require('gulp-postcss'), 
autoPrefixer = require('autoprefixer'), //create prefixer lines
cssImport = require('postcss-import'), //import the files from the modules folder into the main file css
browserSync = require('browser-sync').create(), //inject css and reload the browser
compileSass = require('gulp-sass'); //compile the sass files if you decide use sass



gulp.task('style', function() {
  return gulp.src('./app/assets/styles/style.scss')
        //compile sass
        .pipe(compileSass()) 

        // here you put the postcss filters inside the array 
        .pipe(postCss([cssImport, autoPrefixer])) 

        //put the style css in the temporary folder through the pipe
        .pipe(gulp.dest('./app/temp/styles/'));

});