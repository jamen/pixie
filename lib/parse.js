'use strict';

var Template = require('./template');

/** Parse a source into a `Template` object.
  * @name parse
  * @function
  * @param {String} [source] - Alias of opts.source.
  * @param {Object} opts - Options for the parser.
  * @param {Buffer|String|Array} opts.source - Source to parse into a template.
  * @param {String} [opts.prefix="#{"] - Expression opening tag.
  * @param {String} [opts.suffix="}"] - Expression closing tag.
  * @param {Object} [opts.meta] - Metadata info passed into template.
  * @return {Template} A `Template` object of the source.
  */

exports = module.exports = function parse(opts) {
  if (typeof opts === 'string') {
    var source = opts;
    opts = arguments[1] || {};
    opts.source = source;
  }

  if (typeof opts.prefix === 'undefined') {
    opts.prefix = '</';
  }

  if (typeof opts.suffix === 'undefined') {
    opts.suffix = '/>';
  }

  var scan = exports.scan(opts);
  var fixed = scan.fixed;
  var expressions = scan.expressions;

  // Create template destination
  var dest = [];
  var max = expressions.length;
  for (var i = 0; i < max; i++) {
    dest.push(fixed[i], expressions[i]);
  }
  dest.push(scan.fixed[max]);

  return new Template(dest, fixed, expressions, opts.meta);
};

exports.scan = function scan(opts, results, base) {
  var source = opts.source;
  var prefix = opts.prefix;
  var suffix = opts.suffix;
  base = base || 0;
  if (typeof results === 'undefined') {
    results = {expressions: [], fixed: []};
  }

  var start = source.indexOf(prefix, base);
  var end = source.indexOf(suffix, start);

  // Check if any expressions exist and is valid.
  if (end === -1 || start === -1 || start > end) {
    results.fixed.push(source.slice(base));
    return results;
  }

  // Add the expression and fixed piece to result.
  results.expressions.push(source.slice(start + prefix.length, end));
  results.fixed.push(source.slice(base, start));

  // Recursively find all results (left-to-right) and return.
  return scan(opts, results, end + suffix.length);
};
