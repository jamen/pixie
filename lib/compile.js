'use strict';

/** No serialization
  * @private
  * @param {*} a - Anything.
  * @return {*} a
  */
function _noSerialize(a) {
  return a;
}

// No engines
var ngn = {};

/** Compile a template object into an output source.
  */

module.exports = function compile(template, data, options) {
  data = data || {};
  options = options || {};

  var res = '';
  var partials = template.partials;
  var expressions = template.expressions;
  var max = expressions.length;
  var engines = options.engines || ngn;
  var engmax = engines.length;
  var serialize = options.serialize || _noSerialize;

  resolution: for (var i = 0; i < max; i++) {
    var expression = expressions[i];
    res += partials[i];

    for (var e = 0; e < engmax; e++) {
      var eng = engines[e](expression, data, template);
      if (eng) {
        res += serialize(eng);
        continue resolution;
      }
    }

    res += serialize(data[expression]);
  }

  res += partials[max];
  return res;
};
