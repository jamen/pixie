'use strict';

var test = require('tape');
var sem = require('../lib');

test('parsing', function(t) {
  t.plan(2);

  // Template
  var source = '#{foo} bar #{baz} qux #{foo}';

  // Buffer parsing
  var buftpl = sem.parse(new Buffer(source));
  t.same(
    buftpl.points,
    [
      [new Buffer('foo'), 22, 28],
      [new Buffer('baz'), 11, 17],
      [new Buffer('foo'), 0, 6]
    ],
    'parsing buffer template points'
  );

  // String parsing
  var strtpl = sem.parse(source);
  t.same(
    strtpl.points,
    [
      ['foo', 22, 28],
      ['baz', 11, 17],
      ['foo', 0, 6]
    ],
    'parsing string template points'
  );
});
