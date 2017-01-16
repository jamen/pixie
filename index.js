exports.parse = parse
exports.compile = compile
exports.render = render

function pad(v){for(var r='';v--;)r+=' ';return r}

function parse (source, open, close) {
  open = open || '{{'
  close = close || '}}'

  var openLength = open.length,
      closeLength = close.length,
      i = 0,
      end = source.length,
      partials = [],
      expressions = [],
      first,
      source = pad(closeLength) + source // "hack" to avoid checking starting index each itteration

  while (end > i) {
    // get index of first open
    first = source.indexOf(open, i)

    // break if there's no first open
    if (first === -1) break

    // this commented out code is the check that is avoided with the "hack"
    // partials.push(source.slice(i ? i + closeLength : 0, first))
    partials.push(source.slice(i + closeLength, first))

    // set index of close starting at first open
    i = source.indexOf(close, first)
    expressions.push(source.slice(first + openLength, i))
  }

  partials.push(source.slice(i + closeLength))
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
  return compile(parse(source, open, close), data)
}
