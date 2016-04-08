'use strict';

var test = require('tape');
var sem = require('../lib');

test('compiling', function(t) {
  t.plan(1);

  // Data
  const template = sem.parse(new Buffer('#{bar} Hello #{world}. Foo #{bar}.'));

  // Compile a template
  const result = sem.compile(template, {bar: 'B', world: '0'});
  t.same(
    result.toString(),
    'B Hello 0. Foo B.',
    'compiling correctly.'
  );
});
