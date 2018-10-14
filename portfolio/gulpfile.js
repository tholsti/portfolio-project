const gulp   = require('gulp'),
      csso   = require('gulp-csso'),
      sass   = require('gulp-sass'),
      del    = require('del'),
      browserSync = require('browser-sync').create();
       
// Start BrowserSync
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     proxy: 'http://localhost:8080'
//   })
// })

// Clean the CSS folder
gulp.task('css:clean', function() {
  return del('public/*.css', { force: true });
});
 
// Clean the assets
gulp.task('assets:clean', function() {
  return del(
    ['public/**/*', '!public/*.css'], 
    { force: true }
  );
});
 
// Compile CSS
gulp.task('css:compile', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(csso())
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream());
});
 
// Copy all assets
gulp.task('assets:copy', function () {
  gulp.src('src/assets/**/*')
    .pipe(gulp.dest('public'));
});
 
gulp.task('build', ['css:compile', 'assets:copy']);
 
gulp.task('develop', ['build'], function() {
  browserSync.init({
    server: "public/"
  });
  gulp.watch('src/scss/*', ['css:compile']);
  gulp.watch('src/assets/**/*', ['assets:copy']);
  gulp.watch('src/**/*').on("change", browserSync.reload);
});

