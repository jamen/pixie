'use strict';

var test = require('tape');
var sem = require('../lib');

test('rendering', function(t) {
  t.plan(2);

  // Data
  const source = new Buffer('#{bar} Hello #{world}. Foo #{bar}.');
  const legacy = source.slice();

  // Create a template
  const result = sem.render(source, {bar: 'B', world: '0'});
  t.same(
    result.toString(),
    'B Hello 0. Foo B.',
    'rendering correctly.'
  );

  // Unmalformed source;
  t.same(source, legacy, 'source unmalformed.');
});
