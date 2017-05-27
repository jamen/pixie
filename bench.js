var test = require('tape-benchmark')(require('tape'))
var pixie = require('./')
var parse = pixie.parse
var compile = pixie.compile

var sample = 'hello {{world}} foo {{bar}} baz {{qux}} qix'
var template = parse(sample, '{{', '}}')
var data = { world: 'WORLD', bar: 'BAR', qux: 'QUX' }

test('benchmark', function (t) {
  t.plan(3)
  t.benchmark('parse', function () {
    parse(sample, '{{', '}}')
  })
  t.benchmark('compile', function () {
    compile(template, data)
  })
  t.benchmark('render', function () {
    compile(parse(sample, '{{', '}}'), data)
  })
})
