'use strict';

var test = require('tape');
var sem = require('../lib');

test('compiling', function(t) {
  t.plan(2);

  // Template
  var source = '#{foo} bar #{baz} qux #{foo}';
  var data = {foo: 'hello', baz: 'world'};

  // Compiling buffer-based template
  var buftpl = sem.parse(new Buffer(source));
  t.same(
    sem.compile(buftpl, {data: data}),
    new Buffer('hello bar world qux hello'),
    'compiles buffers'
  );

  // Compiling string-based template
  var strtpl = sem.parse(source);
  t.same(
    sem.compile(strtpl, {data: data}),
    'hello bar world qux hello',
    'compiles strings'
  );
});
