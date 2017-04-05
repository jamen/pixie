var test = require('tape-benchmark')(require('tape'))
var pixie = require('./')
var compile = pixie.compile
var render = pixie.render

var sample = 'hello {{world}} foo {{bar}} baz {{qux}} qix'
var template = pixie(sample)
var data = { world: 'WORLD', bar: 'BAR', qux: 'QUX' }

test('benchmark', function (t) {
  t.plan(3)

  t.benchmark('parse', function () {
    pixie(sample)
  })

  t.benchmark('compile', function () {
    compile(template, data)
  })

  t.benchmark('render', function () {
    render(sample, data)
  })
})
