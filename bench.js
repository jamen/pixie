var bench = require('nanobench')
var pixie = require('./')

var parse = pixie.parse
var compile = pixie.compile

var sample = 'hello {{world}} foo {{bar}} baz {{qux}} qix'
var template = parse(sample, '{{', '}}')
var data = { world: 'WORLD', bar: 'BAR', qux: 'QUX' }

bench('pixie.parse', function (b) {
  b.start()
  parse(sample, '{{', '}}')
  b.end()
})

bench('pixie.compile', function (b) {
  b.start()
  compile(template, data)
  b.end()
})

bench('pixie.parse + pixie.compile (render)', function (b) {
  b.start()
  compile(parse(sample, '{{', '}}'), data)
  b.end()
})
