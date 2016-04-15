'use strict';

var test = require('tape');
var sem = require('../lib');

test('parsing', function(t) {
  t.same(sem.parse('{{foo}} bar {{baz}} qux {{foo}}'),
    {
      partials: ['', ' bar ', ' qux ', ''],
      expressions: ['foo', 'baz', 'foo']
    },
    'simple template'
  );

  // t.same(
  //   sem.parse('{{foo bar {{baz}} qux foo}}'),
  //   {
  //     partials: ['', ''],
  //     expressions: ['foo bar {{baz}} qux foo']
  //   },
  //   'nesting'
  // );

  t.deepEqual(
    sem.parse('foo bar baz qux foo'),
    {
      partials: ['foo bar baz qux foo'],
      expressions: []
    },
    'no expressions'
  );

  t.end();
});
