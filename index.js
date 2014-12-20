'use strict';

/*!
 * imports.
 */

var debug = require('debug')('gulp-watch-local-packages');
var exec = require('child_process').exec;
var extend = require('params').extend;
var pack = require('package.root').package;
var path = require('path');
var watch = require('gulp').watch;

/*!
 * init.
 */

var dependencies = extend({}, pack.dependencies, pack.devDependencies);

/*!
 * exports.
 */

module.exports = watcher;

/**
 * Automatically update local packages when changed.
 * @param {String} prefix
 * @api public
 */

function watcher(prefix) {
  return watch(prefix + '/**/*.js', install.bind(null, prefix));
}

/**
 * Install dependency.
 * @param {String} prefix
 * @param {String} event
 */

function install(prefix, event) {
  var pkg = path.dirname(path.relative(path.resolve(prefix), event.path));
  var dep = dependencies[pkg];
  var cmd = 'npm install ' + dep;

  debug('event: %s', event.type);
  debug('command: %s', cmd);

  if (dep) exec(cmd, onExec);
}

/**
 * Exec handler.
 * @param {Object} error
 * @param {String} stdout
 * @param {String} stderr
 */

function onExec(error, stdout, stderr) {
  if (error) errorLog(error);
  debug('STDOUT: %s', stdout);
  debug('STDERR: %s', stderr);
}

/**
 * Log errors.
 * @param {Object} error
 */

function errorLog(error) {
  debug('error code: %s', error.code);
  debug('signal: %s', error.signal);
}
