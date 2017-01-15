const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const del = require('del');
const path = require('path');
const webpackStream = require('webpack-stream');

const manifest = require('./package.json');
const webpackStreamConfig = require('./webpack.config');

// Load all of our Gulp plugins
const $ = loadPlugins();

// Gather the library data from `package.json`
const config = manifest.customConfig;
const mainFile = manifest.main;
const destinationFolder = path.dirname(mainFile);
const exportFileName = path.basename(mainFile, path.extname(mainFile));

function cleanDist(done) {
  del([destinationFolder]).then(() => done());
}

function copyFiles() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
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

function build() {
  return gulp.src(path.join('src', config.entryFileName))
    .pipe(webpackStream(webpackStreamConfig))
    .pipe(gulp.dest(destinationFolder))
    .pipe($.rename(`${exportFileName}.min.js`))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.uglify({mangle: false}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(destinationFolder));
}

function _registerBabel() {
  require('babel-register');
}

function test() {
  _registerBabel();
  // return _mocha();
}

const watchFiles = ['src/**/*', 'test/**/*', 'package.json', '**/.eslintrc'];

// Run the headless unit tests as you make changes.
function watch() {
  // gulp.watch(watchFiles, ['test']);
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

// Build two versions of the library
gulp.task('compile', ['lint', 'clean'], build);
gulp.task('build', ['compile'], copyFiles);

// Lint and run our tests
gulp.task('test', ['lint'], test);

gulp.task('watch', watch);

// An alias of test
gulp.task('default', ['test']);
