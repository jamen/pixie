'use strict';

var test = require('tape');
var sem = require('../lib');

test('rendering', function(t) {
  t.plan(2);

  // Template
  var source = '#{foo} bar #{baz} qux #{foo}';
  var data = {foo: 'hello', baz: 'world'};

  // Rendering buffer
  t.same(
    sem.render(new Buffer(source), {data: data}),
    new Buffer('hello bar world qux hello'),
    'compiles buffers'
  );

  // Rendering string
  t.same(
    sem.render(source, {data: data}),
    'hello bar world qux hello',
    'compiles strings'
  );
});
