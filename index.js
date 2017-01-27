module.exports = pixie
pixie.compile = compile
pixie.render = render

function pixie (source, open, close) {
  open = open || '{{'
  close = close || '}}'

  var openLength = open.length,
      closeLength = close.length,
      partials = [],
      expressions = [],
      first,
      last

  for (;;) {
    first = source.indexOf(open)
    if (first < 0) break
    partials.push(source.slice(0, first))
    last = source.indexOf(close, first)
    expressions.push(source.slice(first + openLength, last))
    source = source.slice(last + closeLength)
  }

  partials.push(source)

  return [partials, expressions]
}

var NODATA = {}
function compile (template, data) {
  data = data || NODATA
  var source = '', partials = template[0], expressions = template[1], i = 0, end = expressions.length
  while (i < end) source += partials[i] + (data[expressions[i++]] || '')
  return source + partials[i]
}

function render (source, data, open, close) {
  return compile(pixie(source, open, close), data)
}
