'use strict';

var test = require('tape');
var sem = require('../lib');
var Template = sem.Template;

test('parsing', function(t) {
  t.plan(2);

  // Data
  const source = new Buffer('#{bar} Hello #{world}. Foo #{bar}.');
  const legacy = source.slice();

  // Create a template
  const result = sem.parse(source);
  t.same(result, new Template(source, [
    ['bar', 0, 6],
    ['world', 13, 21],
    ['bar', 27, 33]
  ]), 'parsing correctly.');

  // Unmalformed source;
  t.same(source, legacy, 'source unmalformed.');
});
