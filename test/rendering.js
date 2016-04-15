'use strict';

var test = require('tape');
var sem = require('../lib');

test.skip('rendering', function(t) {
  var data = {foo: 'hello', baz: 'world'};

  t.same(
    sem.render('{{foo}} bar {{baz}} qux {{foo}}', data),
    'hello bar world qux hello',
    'correct output'
  );

  t.end();
});
