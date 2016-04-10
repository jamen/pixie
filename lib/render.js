'use strict';

var parse = require('./parse');
var compile = require('./compile');

/** Parse and compile a source in one action.
  * @name render
  * @function
  * @param {Buffer|String|Array} [source] - Alias of opts.source.
  * @param {Object} opts - Options passed to both parser and compiler.
  * @return {Buffer|String|Array} The compiled template of the source.
  */

module.exports = function render(source, opts) {
  return compile(parse(source, opts), opts);
};
