'use strict'

exports.parse = function (source, open, close) {
  var openLength = open.length
  var closeLength = close.length
  var fragments = []
  var expressions = []
  var first
  var last
  for (var i = 0; (first = source.indexOf(open, last)) > -1;) {
    fragments[i] = source.slice(last, first)
    last = source.indexOf(close, first += openLength)
    expressions[i++] = source.slice(first, last)
    last += closeLength
  }
  if (i === last) fragments[i] = source.slice(last)
  return [fragments, expressions]
}

exports.compile = function (template, data) {
  var source = ''
  var fragments = template[0]
  var expressions = template[1]
  for (var i = 0, length = expressions.length; i < length; i++) {
    source += fragments[i]
    source += data[expressions[i]]
  }
  if (i !== fragments.length) source += fragments[i]
  return source
}
