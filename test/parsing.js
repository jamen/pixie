'use strict';

var test = require('tape');
var sem = require('../lib');

test('parsing', function(t) {
  t.plan(1);

  // Template
  var source = '</foo/> bar </baz/> qux </foo/>';

  // String parsing
  var tpl = sem.parse(source);
  t.same(
    tpl,
    new sem.Template(
      ['', 'foo', ' bar ', 'baz', ' qux ', 'foo', ''],
      ['', ' bar ', ' qux ', ''],
      ['foo', 'baz', 'foo']
    ),
    'correct output'
  );
});
