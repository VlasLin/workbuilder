const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const zip = require('gulp-zip');
const del = require('del');

// Шляхи до файлів
const paths = {
  styles: {
    src: 'sass/main.scss',
    dest: 'css/'
  },
  images: {
    src: 'images/**/*',
    dest: 'images/optimized/'
  },
  build: {
    debug: 'build/debug',
    production: 'build/production'
  }
};

// Завдання для збірки CSS у режимі Debug
gulp.task('css:debug', () => {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
});

// Завдання для збірки CSS у режимі Production (мінімізований файл з суфіксом .min)
gulp.task('css:production', () => {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
});

// Завдання для стиснення графічних файлів
gulp.task('optimize:images', () => {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
});

// Завдання для створення архіву (Debug)
gulp.task('archive:debug', () => {
  return gulp.src([
    'css/**/*',
    'images/**/*',
    'index.html', // Додайте інші файли, якщо потрібно
  ], { base: '.' })
    .pipe(zip('debug.zip'))
    .pipe(gulp.dest(paths.build.debug));
});

// Завдання для створення архіву (Production)
gulp.task('archive:production', () => {
  return gulp.src([
    'css/*.min.css',
    'images/optimized/**/*',
    'index.html', // Додайте інші файли, якщо потрібно
  ], { base: '.' })
    .pipe(zip('production.zip'))
    .pipe(gulp.dest(paths.build.production));
});

// Очистка папок build
gulp.task('clean', () => {
  return del([paths.build.debug, paths.build.production]);
});

// Головні завдання для запуску збірки та архівації
gulp.task('build:debug', gulp.series('clean', 'css:debug', 'optimize:images', 'archive:debug'));
gulp.task('build:production', gulp.series('clean', 'css:production', 'optimize:images', 'archive:production'));
