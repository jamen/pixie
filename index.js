var NODATA = {}
function compile (template, data) {
  data = data || NODATA
  var source = '', partials = template[0], expressions = template[1], index = 0,
  max = expressions.length
  while (index < max) source += partials[index] + (data[expressions[index++]] || '')
  return source + partials[index]
}

function parse (source, open, close) {
  open = open || '{{', close = close || '}}'
  var index = 0, previous = null, max = source.length, osize = open.length, csize = close.length,
  partials = [], expressions = [];
  while (max > index) {
    var opening = source.indexOf(open, index)
    if (opening === -1) break
    var previous = index
    partials.push(source.slice(previous, opening))
    opening += size
    index = source.indexOf(close, opening)
    expressions.push(source.slice(opening, index))
  }
  partials.push(source.slice(index))
  return [partials, expressions]
}

function render (source, data, open, close) {
  return compile(parse(source, open, close), data)
}
