'use strict';

/** Compile a `Template` object with the given data and engines.
  * @name compile
  * @function
  * @param {Template} [template] - Alias of opts.template.
  * @param {Object} opts - Options for the compiler.
  * @param {Template} opts.template - Template to compile.
  * @param {Object} opts.data - Data to use in template.
  * @param {Array} [opts.engines] - Engines to use when compiling.
  * @param {Function} [opts.serialize] - Data serialization method.
  * @return {Buffer|String|Array} Same type the template uses.
  */

exports = module.exports = function compile(opts) {
  if (arguments.length > 1) {
    var qtpl = opts;
    opts = arguments[1];
    opts.template = qtpl;
  }

  var template = opts.template;
  var dest = template.dest;
  var data = opts.data || {};
  var engines = opts.engines || [];
  var serialize = opts.serialize || exports._noSerialize;

  // Resolve template
  var out = '';
  var stash = {};
  var resmax = dest.length - 2;
  var engmax = engines.length;

  top:
  for (var i = 0; i < resmax; i += 2) {
    out += dest[i];
    var expression = dest[i + 1];

    var j = engmax;
    while (j--) {
      var engout = engines[j](expression, data, stash, template);
      if (engout) {
        out += serialize(engout);
        continue top;
      }
    }

    out += serialize(data[expression]);
  }

  return out;
};

exports._noSerialize = function(a) {
  return a;
};
