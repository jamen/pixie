'use strict';

var test = require('tape');
var sem = require('../lib');

test('compiling', function(t) {
  t.plan(1);

  // Template
  var source = '{{foo}} bar {{baz}} qux {{foo}}';
  var data = {foo: 'hello', baz: 'world'};

  // Compiling template
  var tpl = sem.parse(source);
  t.same(
    sem.compile(tpl, data),
    'hello bar world qux hello',
    'correct output'
  );
});
