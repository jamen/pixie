'use strict';

var parse = require('./parse');
var compile = require('./compile');

/** Render a template source into an output source.
  * @name render
  * @function
  * @param {String} source - Template source to parse.
  * @param {data} [data] - Data to compile against the template.
  * @param {Object} [options] - Options for parsing and compiling.
  * @return {String} Compiled template.
  */

module.exports = function render(source, data, options) {
  return compile(parse(source, options), data, options);
};
