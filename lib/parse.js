'use strict';

var match = require('balanced-match');
var Template = require('./template');

exports = module.exports = function parse(source, options) {
  if (typeof options === 'undefined') {
    options = {};
  }
  var prefix = options.prefix || '#{';
  var suffix = options.suffix || '}';
  var pos = exports._resolvePos(prefix, suffix, source);

  return new Template(source, pos);
};

exports._resolvePos = function _resolvePos(prefix, suffix, source, rlen) {
  if (typeof rlen === 'undefined') {
    rlen = 0;
  }
  var attempt = match(prefix, suffix, source);
  var pos = [];
  if (attempt) {
    var name = attempt.body.toString();
    var start = rlen + attempt.start;
    var end = rlen + attempt.end + suffix.length;
    pos.push([name, start, end]);
    pos = pos.concat(_resolvePos(prefix, suffix, attempt.post, end));
  }

  return pos;
};
