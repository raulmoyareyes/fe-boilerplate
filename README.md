# fe-boilerplate
[![Travis build status](http://img.shields.io/travis/raulmoyareyes/fe-boilerplate.svg?style=flat)](https://travis-ci.org/raulmoyareyes/fe-boilerplate)
[![Dependency Status](https://david-dm.org/raulmoyareyes/fe-boilerplate.svg)](https://david-dm.org/raulmoyareyes/fe-boilerplate)
[![devDependency Status](https://david-dm.org/raulmoyareyes/fe-boilerplate/dev-status.svg)](https://david-dm.org/raulmoyareyes/fe-boilerplate#info=devDependencies)
[![Tag](https://img.shields.io/github/tag/raulmoyareyes/fe-boilerplate.svg?style=flat)](https://github.com/raulmoyareyes/fe-boilerplate/releases)
[![MIT Licensed](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](#license)

Boilerplate for a Front End project based on [babel-boilerplate](https://github.com/babel/generator-babel-boilerplate).

### Features

✓ Author in [es2017, es2016, es2015](https://babeljs.io/docs/plugins/preset-env/) with polyfills IE 10 (including the unit tests)  
✓ Export and import as ES5  
✓ Latest CSS syntax in [NextCSS](http://cssnext.io/features/)  
✓ Jasmine and Karma test  
✗ Server and watch [livereload](https://github.com/AveVlad/gulp-connect)  

### Basic Guide

Write your code in `src`. Run `npm run build` to compile the source into a distributable format.

Put your unit tests in the same folder than your code with the `Spec` extension. The `npm run test` command runs the tests.

### NPM Scripts

- `npm run start` - Start server on dist folder
- `npm run clean` - Remove dist folder
- `npm run watch` - Continuously run the build as you make changes to the source
   and test files themselves*
- `npm run build` - Build the project*
- `npm run test` - Lint the library and tests, then run the unit tests

\* Set the environment with script:env (ex: `npm run build:prod`)

### Javascript
... Babel, Webpack, es2017, es2016, es2015

### CSS
... Plugins postcss-cssnext, autoprefixer, postcss-import
 
### Test
... Jasmine, karma, karma-jasmine, karma-chrome-launcher, karma-phantomjs-launcher, phantomjs-prebuilt

### Server
... Gulp connect on port 8080

### Linting

This boilerplate uses [ESLint](http://eslint.org/) to lint your source. To
change the rules, edit the `eslint.config.json` files in the config directory.