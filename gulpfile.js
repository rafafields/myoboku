/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

// Server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        //proxy: "http://localhost/wordpress/"
        server: true
    });
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
});

/*
* Configuración de la tarea 'sass'
*/
gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css/master/'))
   .pipe(reload({stream:true}))
   .pipe(browserSync.stream());
});

/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

//Default
gulp.task('default', ['serve']);
