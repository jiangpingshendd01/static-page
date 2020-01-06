const gulp = require("gulp");
// html
const htmlreplace = require('gulp-html-replace');
const htmlmin = require('gulp-htmlmin');
// js
const uglify = require('gulp-uglify');
const babel = require("gulp-babel");
// css
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnano = require('gulp-cssnano');
// images
const image = require('gulp-image');


const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function html(cb) {
  gulp.src('src/upgrade.html')
  .pipe(htmlreplace({
    'css': '/static/index.css',
    'js': '/static/index.js'
  }))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('build/'));
  cb();
}

function js(cb) {
  gulp.src("src/index.js")
    .pipe(babel())
    .pipe(uglify())                 
    .pipe(gulp.dest("build"));
    cb();
}

function css(cb) {
  gulp.src('src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
  cb();
}

function images(cb) {
  gulp.src('images/*')
    .pipe(image())
    .pipe(gulp.dest('build/images'));
    cb();
}

exports.watch = function() {
  // You can use a single task
  gulp.watch('src/*.scss', css);
  // Or a composed task
  gulp.watch('src/*.js', js );
};

exports.build = gulp.series(html, js, css, images);

// series(clean, javascript)