'use strict';

var test = require('tape');
var sem = require('../lib');

test('templates', function(t) {
  t.plan(5);

  // Templates
  var source = 'Foo #{bar}';
  var strtpl = sem.parse(source);
  var buftpl = sem.parse(new Buffer(source));

  // Cloning
  var clonetpl = buftpl.clone();
  t.same(clonetpl, buftpl, 'templates identical');
  t.not(clonetpl.source, buftpl.source, 'clones source');
  t.not(clonetpl.points, buftpl.points, 'clones points');

  // Serializing
  var jtpl = strtpl.serialize();
  t.is(
    jtpl,
    '{"source":"Foo #{bar}","points":[["bar",4,10]],"meta":{}}',
    'serializing'
  );

  // Creating (unserializing)
  var createtpl = sem.create(jtpl);
  t.same(createtpl, strtpl, 'unserializing');
});
