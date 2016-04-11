'use strict';

var test = require('tape');
var sem = require('../lib');

test('rendering', function(t) {
  t.plan(1);

  // Template
  var source = '</foo/> bar </baz/> qux </foo/>';
  var data = {foo: 'hello', baz: 'world'};

  // Rendering
  t.same(
    sem.render(source, {data: data}),
    'hello bar world qux hello',
    'correct output'
  );
});
