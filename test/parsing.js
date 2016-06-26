var test = require('tape');
var pixie = require('..');

test('parsing', function(t) {
  t.same(pixie.parse('{{foo}} bar {{baz}} qux {{foo}}'),
    [['', ' bar ', ' qux ', ''], ['foo', 'baz', 'foo']],
    'simple template'
  );

  t.deepEqual(
    pixie.parse('foo bar baz qux foo'),
    [['foo bar baz qux foo'], []],
    'no expressions'
  );

  t.end();
});
