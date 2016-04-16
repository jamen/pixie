'use strict';

var test = require('tape');
var pixie = require('../lib');

test('parsing', function(t) {
  t.same(pixie.parse('{{foo}} bar {{baz}} qux {{foo}}'),
    {
      partials: ['', ' bar ', ' qux ', ''],
      expressions: ['foo', 'baz', 'foo']
    },
    'simple template'
  );

  // t.same(
  //   pixie.parse('{{foo bar {{baz}} qux foo}}'),
  //   {
  //     partials: ['', ''],
  //     expressions: ['foo bar {{baz}} qux foo']
  //   },
  //   'nesting'
  // );

  t.deepEqual(
    pixie.parse('foo bar baz qux foo'),
    {
      partials: ['foo bar baz qux foo'],
      expressions: []
    },
    'no expressions'
  );

  t.end();
});
