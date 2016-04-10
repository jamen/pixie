'use strict';

var indexof = require('component-indexof');
var concat = require('concat');
var Template = require('./template');

exports = module.exports = function parse(opts) {
  if (opts.constructor !== Object) {
    var source = opts;
    opts = arguments[1] || {};
    opts.source = source;
  }

  var prefix = opts.prefix || '#{';
  var suffix = opts.suffix || '}';
  var points = exports.scan(prefix, suffix, opts.source);

  return new Template(opts.source, points, opts.meta);
};

exports.scan = function scan(prefix, suffix, source, rlen) {
  if (typeof rlen === 'undefined') {
    rlen = 0;
  }

  var start = indexof(source, prefix);
  var end = indexof(source, suffix);
  var tag = [start, end + suffix.length];
  var len = source.length;

  var points = [];
  if (tag[0] !== -1 && tag[1] !== -1) {
    var expression = source.slice(start + prefix.length, end);
    var others = scan(prefix, suffix, source.slice(tag[1], len), rlen + tag[1]);
    points.push([expression, rlen + tag[0], rlen + tag[1]]);
    points = concat([points, others]);
  }

  return points;
};
