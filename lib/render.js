'use strict';

var parse = require('./parse');
var compile = require('./compile');

module.exports = function render(source, data, options) {
  return compile(parse(source, options), data, options);
};
