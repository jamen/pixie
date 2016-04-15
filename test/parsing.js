'use strict';

var test = require('tape');
var sem = require('../lib');

test('parsing', function(t) {
  t.deepEqual(sem.parse('{{foo}} bar {{baz}} qux {{foo}}'),
    {
      partials: ['', ' bar ', ' qux ', ''],
      expressions: ['foo', 'baz', 'foo']
    }
  );

  t.deepEqual(sem.parse('{{foo} bar {{baz}} qux {{foo}}'),
    {
      partials: [ '', ' qux ', '' ],
      expressions: [ 'foo} bar {{baz', 'foo' ]
    }
  );

  t.deepEqual(sem.parse('{{foo bar {{baz}} qux foo}}'),
    {
      partials: [ '', ' qux foo}}' ],
      expressions: [ 'foo bar {{baz' ]
    }
  );

  t.deepEqual(sem.parse('foo bar baz qux foo'),
    {
      partials: ['foo bar baz qux foo'],
      expressions: []
    }
  );

  t.end();
});
