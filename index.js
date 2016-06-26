var _pass = function _pass(a) {
  return a;
};

/** Parse a template source into a template object.
  * @name parse
  * @function
  * @param {String} source - Template source to parse.
  * @param {Object} [options] - Options for parsing.
  * @return {Object} A template object used for compiling.
  */

var parse = exports.parse = function parse(source, options) {
  options = options || {};
  var partials = [];
  var expressions = [];
  var res = [partials, expressions];
  var open = '{{';
  var close = '}}';
  if (options.tags) {
    open = options.tags[0];
    close = options.tags[1];
  }
  var openLength = open.length;
  var closeLength = close.length;

  var max = source.length;
  var index = 0;
  while (index < max) {
    var tagStart = source.indexOf(open, index);
    var start = tagStart + openLength;
    var end = source.indexOf(close, index);

    if (end < start && (tagStart === -1 || end === -1)) {
      break;
    }

    partials.push(source.slice(index, tagStart));
    expressions.push(source.slice(start, end));

    index = end + closeLength;
  }

  partials.push(source.slice(index));

  return res;
};

/** Compile a template object into an output source.
  * @name compile
  * @function
  * @param {Object} template - A template object.
  * @param {Object} [data] - Data to compile against the template.
  * @param {Object} [options] - Options for compiling.
  * @return {String} Compiled source.
  */
var compile = exports.compile = function compile(template, data, options) {
  data = data || {};
  options = options || {};

  var res = '';
  var partials = template[0];
  var expressions = template[1];
  var max = expressions ? expressions.length : 0;
  var engines = options.engines;
  var engmax = engines ? engines.length : 0;
  var serialize = options.serialize || _pass;

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

/** Render a template source into an output source.
  * @name render
  * @function
  * @param {String} source - Template source to parse.
  * @param {data} [data] - Data to compile against the template.
  * @param {Object} [options] - Options for parsing and compiling.
  * @return {String} Compiled template.
  */
exports.render = function render(source, data, options) {
  return compile(parse(source, options), data, options);
};
