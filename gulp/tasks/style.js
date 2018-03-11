/*
  Here you will create the css tasks 
*/
var gulp = require('gulp'),
postCss = require('gulp-postcss'), 
autoPrefixer = require('autoprefixer'), //create prefixer lines
cssvars = require('postcss-simple-vars'), //use variables on the css
nested = require('postcss-nested'),//use nested on the css
cssImport = require('postcss-import'); //import the files from the modules folder into the main file css



gulp.task('style', function() {
  return gulp.src('./app/assets/styles/style.css')

        // here you put the postcss filters inside the array 
        .pipe(postCss([cssImport, cssvars, nested, autoPrefixer])) 

        //put the style css in the temporary folder through the pipe
        .pipe(gulp.dest('./app/temp/styles/'));

});