'use strict';

/** Parse a template source into a template object.
  */

module.exports = function parse(source, options, recurse) {
  options = options || {};
  recurse = recurse || {};

  // Expression tags.
  var tags = options.tags || ['{{', '}}'];
  var prefix = tags[0];
  var suffix = tags[1];

  // Setup result object (done on manual calls, skipped on recursion)
  if (!recurse.res) {
    recurse.res = {partials: [], expressions: []};
  }

  // Quick access.
  var res = recurse.res;
  var index = recurse.index || (recurse.index = 0);

  // Find expression locations.
  var start = source.indexOf(prefix, index);
  var end = source.indexOf(suffix, index);

  // No expressions found, return results.
  if (start === -1 || end === -1 || end < start) {
    res.partials.push(source.slice(index, source.length));
    return res;
  }

  // Add partials and expressions
  res.partials.push(source.slice(index, start));
  res.expressions.push(source.slice(start + prefix.length, end));

  // Change index
  recurse.index = end + suffix.length;

  // Next expression.
  return parse(source, options, recurse);
};
