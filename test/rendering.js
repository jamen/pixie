var test = require('tape');
var pixie = require('..');

test.skip('rendering', function(t) {
  var data = {foo: 'hello', baz: 'world'};

  t.same(
    pixie.render('{{foo}} bar {{baz}} qux {{foo}}', data),
    'hello bar world qux hello',
    'correct output'
  );

  t.end();
});
