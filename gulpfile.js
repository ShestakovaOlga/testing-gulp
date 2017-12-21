var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

gulp.task('default', function () {
  gulp.src('scss/index.scss')// Leo el archivo scss
    .pipe(sass())// Compilo el resultado a CSS
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(cleanCss())// Minifico el fichero resultante
    .pipe(gulp.dest('css'));// Lo escribo en el directorio destino
});

// Tarea que observa cambios en 'scss'
// En su primera ejecución lanzará también la tarea previa
gulp.task('watch', ['default'], function () {
  gulp.watch('scss/*.scss', ['default']);  // Lanza la tarea 'default' cuando observa cambios en cualquer scss
});
