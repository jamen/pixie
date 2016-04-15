'use strict';
/* eslint require-jsdoc: 0 */

var test = require('tape');
var sem = require('../lib');

test('compiling', function(t) {
  var data = {foo: 4, baz: 'world'};

  function pow(expression, data) {
    if (expression[0] === '^') {
      return Math.pow(data[expression.slice(1)], 2);
    }
  }

  function reverse(expression, data) {
    if (expression[0] === '~') {
      return data[expression.slice(1)].split('').reverse().join('');
    }
  }

  function capture(data) {
    return '(' + data + ')';
  }

  var neng = sem.parse('{{foo}} bar {{baz}} qux {{foo}}');
  t.same(
    sem.compile(neng, data),
    '4 bar world qux 4',
    'no engines'
  );

  var yeng = sem.parse('{{foo}} bar {{baz}} qux {{^foo}}');
  t.same(
    sem.compile(yeng, data, {engines: [pow]}),
    '4 bar world qux 16',
    'single engine'
  );

  var myeng = sem.parse('{{foo}} bar {{~baz}} qux {{^foo}}');
  t.same(
    sem.compile(myeng, data, {engines: [pow, reverse]}),
    '4 bar dlrow qux 16',
    'multple engines'
  );

  var sneng = sem.parse('{{foo}} bar {{baz}} qux {{foo}}');
  t.same(
    sem.compile(sneng, data, {serialize: capture}),
    '(4) bar (world) qux (4)',
    'serializing'
  );

  var syeng = sem.parse('{{foo}} bar {{~baz}} qux {{^foo}}');
  t.same(
    sem.compile(syeng, data, {serialize: capture, engines: [pow, reverse]}),
    '(4) bar (dlrow) qux (16)',
    'engines with serializing'
  );

  t.end();
});
