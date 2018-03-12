var gulp = require('gulp');

gulp.task('deleteGulpfile', function() {
  return gulp.src('./gulp/sassOrcss/gulpfile.js')
  .pipe(gulp.dest('./'));
});


/********************************************************* */
gulp.task('sassJs', function() {
  return gulp.src('./gulp/sassOrcss/sass/style.js')
  .pipe(gulp.dest('./gulp/tasks/'));
});

gulp.task('sassScss', function() {
  return gulp.src('./gulp/sassOrcss/sass/style.scss')
  .pipe(gulp.dest('./app/assets/styles/'));             //tasks to use Sass in your project
});

gulp.task('baseScss', function() {
  return gulp.src('./gulp/sassOrcss/sass/global.scss')
  .pipe(gulp.dest('./app/assets/styles/base/'));
});

gulp.task('watchSass', function() {
  return gulp.src('./gulp/sassOrcss/sass/watch.js')
  .pipe(gulp.dest('./gulp/tasks/'));
});

gulp.task('use-sass',['sassJs','sassScss','baseScss','watchSass', 'deleteGulpfile']);

/*************************************************************** */

gulp.task('cssJs', function() {
  return gulp.src('./gulp/sassOrcss/css/style.js')
  .pipe(gulp.dest('./gulp/tasks/'));
});

gulp.task('styleCss', function() {
  return gulp.src('./gulp/sassOrcss/css/style.css')
  .pipe(gulp.dest('./app/assets/styles/'));             //tasks to use Css in your project
});

gulp.task('baseCss', function() {
  return gulp.src('./gulp/sassOrcss/css/global.css')
  .pipe(gulp.dest('./app/assets/styles/base/'));
});

gulp.task('watchCss', function() {
  return gulp.src('./gulp/sassOrcss/css/watch.js')
  .pipe(gulp.dest('./gulp/tasks/'));
});

gulp.task('use-css',['cssJs','styleCss','baseCss','watchCss','deleteGulpfile']);
/*************************************************************** */


