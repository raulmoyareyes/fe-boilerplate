const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const del = require('del');
const path = require('path');
const webpackStream = require('webpack-stream');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const util = require('gulp-util');

const manifest = require('./package.json');
const webpackStreamConfig = require('./webpack.config');

// Load all of our Gulp plugins
const $ = loadPlugins();

// Gather the library data from `package.json`
const config = manifest.customConfig;
const mainFile = manifest.main;
const destinationFolder = path.dirname(mainFile);

function cleanDist() {
  del([destinationFolder]);
}

function copyFiles() {
  gulp.src('src/index.html')
    .pipe(gulp.dest(destinationFolder));
}

// Lint a set of files
function lint(files) {
  return gulp.src(files)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

function lintSrc() {
  return lint('src/**/*.js');
}

function lintTest() {
  return lint('test/**/*.js');
}

function lintGulpfile() {
  return lint('gulpfile.js');
}

function css() {
  var processors = [
    cssnext({browsers: [
      '> 1%',
      'last 2 versions',
      'firefox >= 4',
      'safari 7',
      'safari 8',
      'IE 9',
      'IE 10',
      'IE 11'
    ]}),
    cssnano({autoprefixer: false})
  ];
  return gulp.src('src/**/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest(destinationFolder))
    .pipe($.connect.reload());
}

function js() {
  return gulp.src(path.join('src/js', config.entryFileName))
    .pipe(webpackStream(webpackStreamConfig))
    .pipe(util.env.env == 'prod' ? $.uglify({mangle: false}) : util.noop())
    .pipe(gulp.dest(`${destinationFolder}/js`))
    .pipe($.connect.reload());
}

function _registerBabel() {
  require('babel-register');
}

function test() {
  _registerBabel();
}

function serve () {
  $.connect.server({
    root: destinationFolder,
    port: 8080,
    livereload: true
  });
}

const watchFiles = ['src/**/*', 'test/**/*', 'package.json', '**/.eslintrc'];

// Run the headless unit tests as you make changes.
function watch() {
  gulp.watch(watchFiles, ['build']);
}

// Remove the built files
gulp.task('clean', cleanDist);

// Copy files
gulp.task('copy-files', copyFiles);

// Lint our source code
gulp.task('lint-src', lintSrc);

// Lint our test code
gulp.task('lint-test', lintTest);

// Lint this file
gulp.task('lint-gulpfile', lintGulpfile);

// Lint everything
gulp.task('lint', ['lint-src', 'lint-test', 'lint-gulpfile']);

// Lint and run our tests
gulp.task('test', ['lint'], test);

// Transpile CSS
gulp.task('css', css);

// Transpile JS
gulp.task('js', js);

// Serve with livereload
gulp.task('serve', serve);

// Build two versions of the library
gulp.task('build', ['copy-files', 'css', 'js']);

gulp.task('watch', ['build', 'serve'], watch);

// An alias of build
gulp.task('default', ['watch']);
