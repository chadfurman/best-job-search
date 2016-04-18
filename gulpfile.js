var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');
    source = require('vinyl-source-stream');
    buffer = require('vinyl-buffer');
    browserify = require('browserify');
    watchify = require('watchify');
    babel = require('babelify'),
    cache = require('gulp-cache'),
    mainbowerfiles = require('main-bower-files'),
    del = require('del');

var sassPaths = [
  'src/styles',
  'bower_components',
  'bower_components/bootstrap'
];
var styles = [
  'src/styles/main.scss'
];
var bower_scripts = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/tether/dist/js/tether.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/mithril/mithril.min.js',
];

gulp.task('js', function (watch) {
  var bundler = watchify(browserify('./src/js/app.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/assets/js'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
});

gulp.task('styles', function() {
  return sass(styles, {
    style: 'expanded',
    loadPath: sassPaths
  })
    .pipe(autoprefixer('last 2 versions'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('bower_scripts', function() {
  return gulp.src(bower_scripts, {base: 'bower_components'})
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'js', 'bower_scripts', 'images', 'watch');
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['js']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
});


