
function parse (source, open, close) {
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
  for (var i = 0, length = expressions.length; i < length;) {
    source += fragments[i]
    source += data[expressions[i++]]
  }
  return source + fragments[i]
}

function render (source, data, open, close) {
  var openLength = open.length
  var closeLength = close.length
  var result = ''
  var first
  var last
  for (var i = 0; (first = source.indexOf(open, last)) > -1;) {
    result += source.slice(last, first)
    last = source.indexOf(close, first += openLength)
    result += data[source.slice(first, last)]
    last += closeLength
  }
  return result + source.slice(last)
}

export { parse, compile, render }
