'use strict';

var test = require('tape');
var sem = require('../lib');

test('engines', function(t) {
  t.plan(2);

  // Template
  var source = '#{foo} bar #{~baz} qux #{^foo}';
  var data = {foo: 4, baz: 'world'};

  // Engines
  function reverse(expression, data) {
    expression = expression.toString();
    if (expression[0] === '~') {
      var name = expression.slice(1);
      return data[name].toString().split('').reverse().join('');
    }
  }

  function pow(expression, data) {
    expression = expression.toString();
    if (expression[0] === '^') {
      var name = expression.slice(1);
      return Math.pow(data[name], 2);
    }
  }

  // Compiling string templates with engines
  var buftpl = sem.parse(new Buffer(source));
  t.is(
    sem.compile(buftpl, {data: data, engines: [reverse, pow]}).toString(),
    new Buffer('4 bar dlrow qux 16').toString(),
    'engines with buffer templates'
  );

  // Compiling string templates with engines
  var strtpl = sem.parse(source);
  t.is(
    sem.compile(strtpl, {data: data, engines: [reverse, pow]}),
    '4 bar dlrow qux 16',
    'engines with string templates'
  );
});
