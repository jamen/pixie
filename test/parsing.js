'use strict';

var test = require('tape');
var sem = require('../lib');

test('parsing', function(t) {
  t.plan(1);

  // Template
  var source = '{{foo}} bar {{baz}} qux {{foo}}';

  // String parsing
  var tpl = sem.parse(source);
  t.same(
    tpl,
    {
      partials: ['', ' bar ', ' qux ', ''],
      expressions: ['foo', 'baz', 'foo']
    },
    'correct output'
  );
});
