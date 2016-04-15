'use strict';

var test = require('tape');
var vajra = require('../lib');

var source = 'Hello {{test}} world {{foo}}';
var tpl = vajra.parse(source);

test('example', function(t) {
  console.log('Source:\n', source);
  console.log('Template:\n', tpl);
  t.end();
});
