'use strict';

var concat = require('concat');

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
    var template = opts;
    opts = arguments[1];
    opts.template = template;
  }

  var engines = opts.engines || [];
  var data = opts.data || {};
  var serialize = opts.serialize;

  var replica = opts.template.clone();
  var src = replica.source;
  var len = replica.source.length;
  var points = replica.points;
  var max = replica.points.length;
  var output = [];

  // Resolve expressions
  for (var i = 0; i < max; i++) {
    var info = points[i];
    var expression = info[0];
    var end = info[2];
    var res = null;

    if (typeof serialize === 'undefined') {
      var type = src.constructor;
      if (type === String) {
        serialize = exports._serializeString;
      } else if (Buffer && type === Buffer) {
        serialize = exports._serializeBuffer;
      }
    }

    if (engines && engines.length) {
      res = exports._resolve(expression, data, replica, serialize, engines);
    }

    if (typeof res === 'undefined' || res === null) {
      res = data[expression.toString().trim()];
      if (typeof res === 'undefined') {
        res = '';
      }
    }

    var p = points[i - 1];
    var post = src.slice(end, p ? p[1] : len);
    output.unshift(serialize(res), post);
  }

  // Add ending
  output.unshift(src.slice(0, points[max - 1][1]));

  return concat(output);
};

exports._resolve = function _resolve(name, data, template, serialize, engines) {
  var max = engines.length;
  var attempt = null;
  for (var i = 0; i < max; i++) {
    attempt = engines[i](name, data, serialize, template);
    if (attempt) {
      return attempt;
    }
  }
};

exports._serializeString = function(data) {
  return data.toString();
};

exports._serializeBuffer = function(data) {
  return new Buffer(exports._serializeString(data));
};
