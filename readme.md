# gulp-watch-local-packages

[![Build Status](http://img.shields.io/travis/wilmoore/gulp-watch-local-packages.svg)](https://travis-ci.org/wilmoore/gulp-watch-local-packages) [![NPM version](http://img.shields.io/npm/v/gulp-watch-local-packages.svg)](https://www.npmjs.org/package/gulp-watch-local-packages) [![NPM downloads](http://img.shields.io/npm/dm/gulp-watch-local-packages.svg)](https://www.npmjs.org/package/gulp-watch-local-packages) [![LICENSE](http://img.shields.io/npm/l/gulp-watch-local-packages.svg)](license)

> Gulp watcher to automatically update local packages when changed.

    $ npm install gulp-watch-local-packages --save-dev

## Example

###### install local packages.

    $ npm install --save file:lib/domain-specific-functions

###### use local packages.

    var query = require('domain-specific-functions').query;

###### automatically update local packages in `node_modules` on change.

    var install = require('gulp-watch-local-packages');

    gulp.task('default', function () {
      install('lib');
    });

## Debugging

    $ DEBUG=gulp-watch-local-packages …

## License

  [MIT](license)
