'use strict';

var test = require('tape');
var vajra = require('../lib');

test.skip('rendering', function(t) {
  var data = {foo: 'hello', baz: 'world'};

  t.same(
    vajra.render('{{foo}} bar {{baz}} qux {{foo}}', data),
    'hello bar world qux hello',
    'correct output'
  );

  t.end();
});
