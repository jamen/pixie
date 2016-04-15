'use strict';

/** Compile a template object into an output source.
  */

module.exports = function compile(template, data, options) {
  data = data || {};
  options = options || {};

  var res = '';
  var partials = template.partials;
  var expressions = template.expressions;
  var max = expressions.length;

  for (var i = 0; i < max; i++) {
    res += partials[i];
    res += data[expressions[i]];
  }

  res += partials[max];
  return res;
};
