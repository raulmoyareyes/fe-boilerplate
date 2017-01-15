# fe-boilerplate
[![Travis build status](http://img.shields.io/travis/raulmoyareyes/fe-boilerplate.svg?style=flat)](https://travis-ci.org/raulmoyareyes/fe-boilerplate)
[![Dependency Status](https://david-dm.org/raulmoyareyes/fe-boilerplate.svg)](https://david-dm.org/raulmoyareyes/fe-boilerplate)
[![devDependency Status](https://david-dm.org/raulmoyareyes/fe-boilerplate/dev-status.svg)](https://david-dm.org/raulmoyareyes/fe-boilerplate#info=devDependencies)

Boilerplate for a Front End project based on [babel-boilerplate](https://github.com/babel/generator-babel-boilerplate).

### Features

✓ Author in [ES2015](https://babeljs.io/docs/learn-es2015/) (including the unit tests)
✓ Export as ES5 & [UMD](https://github.com/umdjs/umd)

Comming soon...
- Latest CSS syntax in [NextCSS](http://cssnext.io/features/)
- Jasmine and Karma test

### Basic Guide

Write your code in `src`. Run `npm run build` to compile the source into a distributable format.

Put your unit tests in `test/unit`. The `npm run test` command runs the tests.

### npm Scripts

- `npm run start` - Start http-server on dist folder
- `npm run watch` - Continuously run the build as you make changes to the source
   and test files themselves
- `npm run build` - Lint then build the library
- `npm run lint` - Lint the source and unit tests
- `npm run test` - Lint the library and tests, then run the unit tests

### PostCSS
... Plugins postcss-cssnext, autoprefixer, postcss-import
 
### Jasmine and Karma
... Jasmine, karma, karma-cli, karma-jasmine, karma-chrome-launcher, karma-firefox-launcher, karma-phantomjs-launcher, phantomjs-prebuilt
