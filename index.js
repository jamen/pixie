'use strict'

module.exports = pixie
pixie.compile = compile
pixie.render = render

function pixie (source, open, close) {
  open = open || '{{'
  close = close || '}}'

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

  fragments[i] = source.slice(last)

  return [fragments, expressions]
}

function compile (template, data) {
  var source = ''
  var fragments = template[0]
  var expressions = template[1]

  for (var i = 0; i < expressions.length; i++) {
    source += fragments[i]

    var value = data[expressions[i]]

    if (value) {
      source += value
    }
  }

  return source + fragments[i]
}

function render (source, data, open, close) {
  return compile(pixie(source, open, close), data)
}
