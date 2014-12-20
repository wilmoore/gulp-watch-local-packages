'use strict';

/*!
 * imports.
 */

var test = require('tape');
var EventEmitter = require('events').EventEmitter;

/*!
 * imports (local).
 */

var installer = require('./');

/*!
 * cases.
 */

test('emitter', function (t) {
  t.plan(1);
  var emitter = installer('lib');
  t.equal(emitter.constructor, EventEmitter);
  emitter.end();
});
