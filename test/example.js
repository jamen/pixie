var test = require('tape');
var pixie = require('..');

var source = 'Hello {{test}} world {{foo}}';
var tpl = pixie.parse(source);

test('example', function(t) {
  console.log('Source:\n', source);
  console.log('Template:\n', tpl);
  t.end();
});
