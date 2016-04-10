'use strict';

var parse = require('./parse');
var compile = require('./compile');

/** Parse and compile a template in one action.
  * @name render
  * @param {Buffer|String|Array} [source] - Alias of opts.source.
  * @param {Object} opts - Options passed to both parser and compiler.
  */

module.exports = function render(source, opts) {
  return compile(parse(source, opts), opts);
};
