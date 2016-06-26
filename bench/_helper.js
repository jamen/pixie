var read = require('fs').readFileSync;
var join = require('path').join;
var Suite = require('benchmark').Suite;

exports.small = read(join(__dirname, '/templates/small.txt')).toString();
exports.large = read(join(__dirname, '/templates/large.txt')).toString();

exports.data = {
  foo: 'Hello!',
  bar: 'World!',
  baz: exports.small,
  qux: 'Ayyyy'
};

exports.caps = function(expression, data) {
  return data[expression].toUpperCase();
};

exports.create = function() {
  var app = new Suite();

  app.on('cycle', function(event) {
    console.log(String(event.target));
  });

  return app;
};
