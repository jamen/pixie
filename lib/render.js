'use strict';

var parse = require('./parse');
var compile = require('./compile');

module.exports = function render(source, opts) {
  return compile(parse(source, opts), opts);
};
